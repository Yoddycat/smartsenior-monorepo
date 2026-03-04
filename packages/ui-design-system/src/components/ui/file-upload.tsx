import * as React from "react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export interface FileUploadProps {
  accept?: string
  multiple?: boolean
  maxSize?: number // in bytes
  maxFiles?: number
  onFilesSelected?: (files: File[]) => void
  onError?: (error: string) => void
  disabled?: boolean
  className?: string
}

/**
 * FileUpload component following SmartSenior Design System
 *
 * Drag and drop file upload with click support
 */
const FileUpload = React.forwardRef<HTMLInputElement, FileUploadProps>(
  ({
    accept,
    multiple = false,
    maxSize = 10 * 1024 * 1024, // 10MB default
    maxFiles = 5,
    onFilesSelected,
    onError,
    disabled,
    className,
  }, ref) => {
    const [isDragging, setIsDragging] = React.useState(false)
    const [files, setFiles] = React.useState<File[]>([])
    const inputRef = React.useRef<HTMLInputElement>(null)

    const formatFileSize = (bytes: number) => {
      if (bytes === 0) return '0 Bytes'
      const k = 1024
      const sizes = ['Bytes', 'KB', 'MB', 'GB']
      const i = Math.floor(Math.log(bytes) / Math.log(k))
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
    }

    const validateFiles = (fileList: FileList | File[]): File[] => {
      const validFiles: File[] = []
      const filesArray = Array.from(fileList)

      for (const file of filesArray) {
        if (file.size > maxSize) {
          onError?.(`Arquivo "${file.name}" excede o tamanho máximo de ${formatFileSize(maxSize)}`)
          continue
        }
        if (accept) {
          const acceptedTypes = accept.split(',').map(t => t.trim())
          const fileType = file.type
          const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase()

          const isAccepted = acceptedTypes.some(type => {
            if (type.startsWith('.')) return fileExtension === type.toLowerCase()
            if (type.endsWith('/*')) return fileType.startsWith(type.replace('/*', '/'))
            return fileType === type
          })

          if (!isAccepted) {
            onError?.(`Tipo de arquivo "${file.name}" não é permitido`)
            continue
          }
        }
        validFiles.push(file)
      }

      if (!multiple && validFiles.length > 1) {
        return [validFiles[0]]
      }

      if (validFiles.length > maxFiles) {
        onError?.(`Máximo de ${maxFiles} arquivos permitidos`)
        return validFiles.slice(0, maxFiles)
      }

      return validFiles
    }

    const handleFiles = (fileList: FileList | File[]) => {
      const validFiles = validateFiles(fileList)
      if (validFiles.length > 0) {
        setFiles(validFiles)
        onFilesSelected?.(validFiles)
      }
    }

    const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault()
      if (!disabled) setIsDragging(true)
    }

    const handleDragLeave = (e: React.DragEvent) => {
      e.preventDefault()
      setIsDragging(false)
    }

    const handleDrop = (e: React.DragEvent) => {
      e.preventDefault()
      setIsDragging(false)
      if (!disabled && e.dataTransfer.files) {
        handleFiles(e.dataTransfer.files)
      }
    }

    const handleClick = () => {
      if (!disabled) inputRef.current?.click()
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        handleFiles(e.target.files)
      }
    }

    const removeFile = (index: number) => {
      const newFiles = files.filter((_, i) => i !== index)
      setFiles(newFiles)
      onFilesSelected?.(newFiles)
    }

    return (
      <div className={cn("w-full", className)}>
        <div
          onClick={handleClick}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={cn(
            "relative flex flex-col items-center justify-center p-8",
            "border-2 border-dashed rounded-lg cursor-pointer",
            "transition-colors duration-200",
            isDragging
              ? "border-[var(--primary)] bg-[var(--primary)]/5"
              : "border-[var(--border)] hover:border-[var(--primary)] hover:bg-[var(--background-muted)]",
            disabled && "cursor-not-allowed opacity-50"
          )}
        >
          <input
            ref={inputRef}
            type="file"
            accept={accept}
            multiple={multiple}
            onChange={handleChange}
            disabled={disabled}
            className="sr-only"
          />
          <svg
            className="w-12 h-12 mb-4 text-[var(--foreground-muted)]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
          <p className="mb-2 text-base font-medium text-[var(--foreground)]">
            Arraste arquivos aqui ou clique para selecionar
          </p>
          <p className="text-sm text-[var(--foreground-muted)]">
            {accept ? `Formatos: ${accept}` : 'Todos os formatos'} • Máximo: {formatFileSize(maxSize)}
          </p>
        </div>

        {files.length > 0 && (
          <div className="mt-4 space-y-2">
            {files.map((file, index) => (
              <div
                key={`${file.name}-${index}`}
                className="flex items-center justify-between p-3 bg-[var(--background-muted)] rounded-lg"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <svg
                    className="w-5 h-5 shrink-0 text-[var(--foreground-muted)]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  <div className="min-w-0">
                    <p className="text-sm font-medium truncate text-[var(--foreground)]">
                      {file.name}
                    </p>
                    <p className="text-xs text-[var(--foreground-muted)]">
                      {formatFileSize(file.size)}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeFile(index)}
                  className="p-1 rounded hover:bg-[var(--background)] transition-colors"
                  aria-label="Remover arquivo"
                >
                  <svg
                    className="w-4 h-4 text-[var(--foreground-muted)]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }
)
FileUpload.displayName = "FileUpload"

export { FileUpload }
