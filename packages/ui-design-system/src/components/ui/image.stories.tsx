import type { Meta, StoryObj } from '@storybook/react'
import { Image, ImageCard, HeroImage, AvatarImage } from './image'

// ============================================
// META
// ============================================

const meta: Meta<typeof Image> = {
  title: 'Components/Image',
  component: Image,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Componentes de imagem do SmartSenior Design System, baseados nas diretrizes do moodboard.

## Filosofia
As imagens transmitem **vitalidade, conexão e autonomia**. Utilizamos:
- Cantos arredondados (radius-image: 16px)
- Aspect ratios otimizados para cada contexto
- Overlays com gradientes suaves
- Paleta de cores SmartSenior

## Componentes Disponíveis
- **Image**: Componente base com loading skeleton
- **ImageCard**: Card com imagem, título e ações
- **HeroImage**: Banner hero com overlay e CTA
- **AvatarImage**: Avatar circular com fallback
        `,
      },
    },
  },
  tags: ['autodocs'],
}

export default meta

// ============================================
// IMAGE STORIES
// ============================================

type ImageStory = StoryObj<typeof Image>

export const Default: ImageStory = {
  args: {
    src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
    alt: 'Idosos felizes praticando jardinagem',
    rounded: 'image',
    aspectRatio: 'landscape',
  },
  render: (args) => (
    <div style={{ width: '400px' }}>
      <Image {...args} />
    </div>
  ),
}

export const AspectRatios: StoryObj = {
  name: 'Aspect Ratios',
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', maxWidth: '800px' }}>
      <div>
        <Image
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop"
          alt="Square"
          aspectRatio="square"
        />
        <p style={{ fontSize: '12px', textAlign: 'center', marginTop: '8px', color: '#666' }}>Square (1:1)</p>
      </div>
      <div>
        <Image
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop"
          alt="Landscape"
          aspectRatio="landscape"
        />
        <p style={{ fontSize: '12px', textAlign: 'center', marginTop: '8px', color: '#666' }}>Landscape (4:3)</p>
      </div>
      <div>
        <Image
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=400&fit=crop"
          alt="Portrait"
          aspectRatio="portrait"
        />
        <p style={{ fontSize: '12px', textAlign: 'center', marginTop: '8px', color: '#666' }}>Portrait (3:4)</p>
      </div>
      <div>
        <Image
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=480&h=270&fit=crop"
          alt="Video"
          aspectRatio="video"
        />
        <p style={{ fontSize: '12px', textAlign: 'center', marginTop: '8px', color: '#666' }}>Video (16:9)</p>
      </div>
      <div>
        <Image
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=500&fit=crop"
          alt="Feed"
          aspectRatio="feed"
        />
        <p style={{ fontSize: '12px', textAlign: 'center', marginTop: '8px', color: '#666' }}>Feed (4:5)</p>
      </div>
      <div>
        <Image
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=250&fit=crop"
          alt="Wide"
          aspectRatio="wide"
        />
        <p style={{ fontSize: '12px', textAlign: 'center', marginTop: '8px', color: '#666' }}>Wide (16:9)</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Diferentes aspect ratios para cada contexto de uso (feed, stories, website, etc.).',
      },
    },
  },
}

export const BorderRadius: StoryObj = {
  name: 'Border Radius',
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      {(['none', 'sm', 'md', 'lg', 'xl', '2xl', 'image', 'full'] as const).map((radius) => (
        <div key={radius} style={{ textAlign: 'center' }}>
          <div style={{ width: '100px', height: '100px' }}>
            <Image
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop"
              alt={`Radius ${radius}`}
              rounded={radius}
              aspectRatio="square"
            />
          </div>
          <p style={{ fontSize: '12px', marginTop: '8px', color: '#666' }}>{radius}</p>
        </div>
      ))}
    </div>
  ),
}

// ============================================
// IMAGE CARD STORIES
// ============================================

type ImageCardStory = StoryObj<typeof ImageCard>

export const CardVertical: ImageCardStory = {
  name: 'ImageCard: Vertical',
  render: () => (
    <div style={{ width: '350px' }}>
      <ImageCard
        src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop"
        alt="Idosos praticando jardinagem"
        category="Bem-estar"
        title="Jardinagem melhora a saude mental"
        description="Atividades ao ar livre promovem bem-estar e conexao com a natureza para idosos."
        primaryAction={{ label: 'Saiba mais', onClick: () => alert('Clicou!') }}
        secondaryAction={{ label: 'Salvar' }}
      />
    </div>
  ),
}

export const CardHorizontal: ImageCardStory = {
  name: 'ImageCard: Horizontal',
  render: () => (
    <div style={{ width: '600px' }}>
      <ImageCard
        layout="horizontal"
        src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop"
        alt="Idosos felizes"
        category="Saude"
        title="Exercicios leves para terceira idade"
        description="Mantenha-se ativo com rotinas simples e seguras."
        imageAspect="square"
      />
    </div>
  ),
}

export const CardOverlay: ImageCardStory = {
  name: 'ImageCard: Overlay',
  render: () => (
    <div style={{ width: '400px' }}>
      <ImageCard
        layout="overlay"
        src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=500&fit=crop"
        alt="Familia reunida"
        category="Familia"
        title="Momentos que importam"
        description="Conexoes familiares fortalecem a saude emocional."
        imageAspect="feed"
        primaryAction={{ label: 'Agendar visita' }}
      />
    </div>
  ),
}

export const CardGrid: StoryObj = {
  name: 'ImageCard: Grid Layout',
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', maxWidth: '1000px' }}>
      <ImageCard
        src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop"
        alt="Jardinagem"
        category="Atividades"
        title="Jardinagem terapeutica"
        description="Beneficios comprovados para mente e corpo."
      />
      <ImageCard
        src="https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&h=300&fit=crop"
        alt="Culinaria"
        category="Nutricao"
        title="Receitas saudaveis"
        description="Alimentacao balanceada para longevidade."
      />
      <ImageCard
        src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop"
        alt="Exercicios"
        category="Movimento"
        title="Yoga para seniores"
        description="Flexibilidade e equilibrio em qualquer idade."
      />
    </div>
  ),
}

// ============================================
// HERO IMAGE STORIES
// ============================================

type HeroImageStory = StoryObj<typeof HeroImage>

export const HeroGradient: HeroImageStory = {
  name: 'HeroImage: Gradient Overlay',
  render: () => (
    <div style={{ width: '100%', maxWidth: '900px' }}>
      <HeroImage
        src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=600&fit=crop"
        alt="Familia feliz"
        headline="Que tipo de ajuda seus pais precisam?"
        subheadline="Descubra o nivel real de dependencia do seu familiar com nossa avaliacao gratuita."
        cta={{ label: 'AVALIACAO GRATUITA EM 5 MINUTOS', onClick: () => alert('CTA clicked!') }}
        overlay="gradient"
      />
    </div>
  ),
}

export const HeroNavy: HeroImageStory = {
  name: 'HeroImage: Navy Overlay',
  render: () => (
    <div style={{ width: '100%', maxWidth: '900px' }}>
      <HeroImage
        src="https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=1200&h=600&fit=crop"
        alt="Idosos ativos"
        headline="Independencia com seguranca"
        subheadline="Diagnosticos precisos. Protocolos cientificos."
        cta={{ label: 'Conheca nossos servicos' }}
        overlay="navy"
        align="center"
      />
    </div>
  ),
}

export const HeroCentered: HeroImageStory = {
  name: 'HeroImage: Centered',
  render: () => (
    <div style={{ width: '100%', maxWidth: '900px' }}>
      <HeroImage
        src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&h=500&fit=crop"
        alt="Bem-estar"
        headline="Viva mais. Viva melhor."
        subheadline="Plataforma completa para cuidado e monitoramento de idosos."
        cta={{ label: 'Comece agora' }}
        overlay="dark"
        align="center"
        minHeight="500px"
      />
    </div>
  ),
}

// ============================================
// AVATAR IMAGE STORIES
// ============================================

type AvatarImageStory = StoryObj<typeof AvatarImage>

export const AvatarSizes: AvatarImageStory = {
  name: 'AvatarImage: Sizes',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <AvatarImage
        src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=100&h=100&fit=crop&faces"
        alt="Maria"
        size="sm"
      />
      <AvatarImage
        src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=100&h=100&fit=crop&faces"
        alt="Maria"
        size="md"
      />
      <AvatarImage
        src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=100&h=100&fit=crop&faces"
        alt="Maria"
        size="lg"
      />
      <AvatarImage
        src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=100&h=100&fit=crop&faces"
        alt="Maria"
        size="xl"
      />
      <AvatarImage
        src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=100&h=100&fit=crop&faces"
        alt="Maria"
        size="2xl"
      />
    </div>
  ),
}

export const AvatarFallback: AvatarImageStory = {
  name: 'AvatarImage: Fallback',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <AvatarImage
        alt="Maria Silva"
        fallback="Maria Silva"
        size="xl"
      />
      <AvatarImage
        alt="Joao Santos"
        fallback="Joao Santos"
        size="xl"
      />
      <AvatarImage
        alt="Ana Costa"
        fallback="Ana Costa"
        size="xl"
        borderColor="#FF6A13"
      />
    </div>
  ),
}

export const AvatarWithBorder: AvatarImageStory = {
  name: 'AvatarImage: With Border',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <AvatarImage
        src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=100&h=100&fit=crop&faces"
        alt="Usuario"
        size="xl"
        borderColor="#FF6A13"
      />
      <AvatarImage
        src="https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=100&h=100&fit=crop&faces"
        alt="Usuario"
        size="xl"
        borderColor="#003057"
      />
      <AvatarImage
        src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=100&h=100&fit=crop&faces"
        alt="Usuario"
        size="xl"
        borderColor="#279989"
      />
    </div>
  ),
}

// ============================================
// USE CASE STORIES
// ============================================

export const UseCaseFeedPost: StoryObj = {
  name: 'Caso de Uso: Post de Feed',
  render: () => (
    <div style={{ width: '350px' }}>
      <div style={{
        position: 'relative',
        aspectRatio: '4/5',
        borderRadius: '16px',
        overflow: 'hidden',
      }}>
        <img
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&h=875&fit=crop"
          alt="Familia feliz"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, transparent 50%, #003057 100%)',
        }} />
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '24px',
          color: 'white',
        }}>
          <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '8px' }}>
            Que tipo de ajuda seus pais precisam?
          </h2>
          <p style={{ fontSize: '14px', opacity: 0.9, marginBottom: '16px' }}>
            Descubra o nivel real de dependencia do seu familiar.
          </p>
          <button style={{
            width: '100%',
            padding: '14px',
            background: '#FF6A13',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            fontWeight: 700,
            fontSize: '14px',
            cursor: 'pointer',
          }}>
            AVALIACAO GRATUITA EM 5 MINUTOS
          </button>
        </div>
        {/* Logo */}
        <div style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          color: 'white',
        }}>
          <div style={{
            width: '32px',
            height: '32px',
            background: '#FF6A13',
            borderRadius: '6px',
          }} />
          <span style={{ fontWeight: 700, fontSize: '14px' }}>SmartSenior</span>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Exemplo de post para Instagram Feed seguindo as diretrizes do moodboard SmartSenior.',
      },
    },
  },
}

export const UseCaseWebsiteHero: StoryObj = {
  name: 'Caso de Uso: Website Hero',
  render: () => (
    <div style={{ width: '100%', maxWidth: '1200px' }}>
      <HeroImage
        src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&h=600&fit=crop"
        alt="Familia multigeracional"
        headline="Cuidado inteligente para quem voce ama"
        subheadline="Plataforma completa com IA para monitoramento, orientacao e suporte a idosos e suas familias."
        cta={{ label: 'Comece sua avaliacao gratuita' }}
        overlay="gradient"
        minHeight="500px"
      />
    </div>
  ),
}

export const UseCaseArticleGrid: StoryObj = {
  name: 'Caso de Uso: Grid de Artigos',
  render: () => (
    <div style={{ maxWidth: '1000px' }}>
      <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#003057', marginBottom: '24px' }}>
        Dicas de Bem-estar
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
        <ImageCard
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop"
          alt="Jardinagem"
          category="Saude Mental"
          title="Jardinagem melhora a saude mental da pessoa idosa"
          primaryAction={{ label: 'Ler artigo' }}
        />
        <ImageCard
          src="https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&h=300&fit=crop"
          alt="Arte"
          category="Criatividade"
          title="Arteterapia na 3a idade: pinceladas de bem-estar"
          primaryAction={{ label: 'Ler artigo' }}
        />
        <ImageCard
          src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop"
          alt="Exercicios"
          category="Movimento"
          title="Exercicios leves para manter a mobilidade"
          primaryAction={{ label: 'Ler artigo' }}
        />
      </div>
    </div>
  ),
}
