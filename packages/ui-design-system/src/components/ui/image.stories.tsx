import type { Meta, StoryObj } from '@storybook/react'
import { Image, ImageCard, HeroImage, AvatarImage } from './image'

// Stock images - Cuidado intergeracional (filha adulta cuidando da mae idosa, ambas felizes)
// Fonte: Pexels (uso gratuito, sem atribuicao necessaria)
const stockImages = {
  // Filha cumprimentando mae idosa no jardim - Andrea Piacquadio
  filhaMaeJardim: 'https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=1200',
  // Filha abraçando mae idosa sorrindo
  filhaMaeAbraco: 'https://images.pexels.com/photos/3768146/pexels-photo-3768146.jpeg?auto=compress&cs=tinysrgb&w=1200',
  // Cuidadora ajudando idosa a caminhar em casa
  cuidadoraIdosa: 'https://images.pexels.com/photos/7551442/pexels-photo-7551442.jpeg?auto=compress&cs=tinysrgb&w=1200',
  // Mae e filha conversando felizes
  conversaFeliz: 'https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&w=1200',
  // Idosa feliz com familia
  familiaReunida: 'https://images.pexels.com/photos/3768140/pexels-photo-3768140.jpeg?auto=compress&cs=tinysrgb&w=1200',
  // Atividade juntas
  atividadeJuntas: 'https://images.pexels.com/photos/3768152/pexels-photo-3768152.jpeg?auto=compress&cs=tinysrgb&w=1200',
  // Idosa ativa e saudavel
  idosaAtiva: 'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=1200',
  // Cuidado em casa
  cuidadoCasa: 'https://images.pexels.com/photos/7551617/pexels-photo-7551617.jpeg?auto=compress&cs=tinysrgb&w=1200',
}

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
    src: stockImages.filhaMaeJardim,
    alt: 'Filha e mae idosa felizes no jardim',
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
          src={stockImages.filhaMaeAbraco}
          alt="Square"
          aspectRatio="square"
        />
        <p style={{ fontSize: '12px', textAlign: 'center', marginTop: '8px', color: '#666' }}>Square (1:1)</p>
      </div>
      <div>
        <Image
          src={stockImages.filhaMaeJardim}
          alt="Landscape"
          aspectRatio="landscape"
        />
        <p style={{ fontSize: '12px', textAlign: 'center', marginTop: '8px', color: '#666' }}>Landscape (4:3)</p>
      </div>
      <div>
        <Image
          src={stockImages.cuidadoraIdosa}
          alt="Portrait"
          aspectRatio="portrait"
        />
        <p style={{ fontSize: '12px', textAlign: 'center', marginTop: '8px', color: '#666' }}>Portrait (3:4)</p>
      </div>
      <div>
        <Image
          src={stockImages.familiaReunida}
          alt="Video"
          aspectRatio="video"
        />
        <p style={{ fontSize: '12px', textAlign: 'center', marginTop: '8px', color: '#666' }}>Video (16:9)</p>
      </div>
      <div>
        <Image
          src={stockImages.conversaFeliz}
          alt="Feed"
          aspectRatio="feed"
        />
        <p style={{ fontSize: '12px', textAlign: 'center', marginTop: '8px', color: '#666' }}>Feed (4:5)</p>
      </div>
      <div>
        <Image
          src={stockImages.atividadeJuntas}
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
              src={stockImages.idosaAtiva}
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
        src={stockImages.filhaMaeJardim}
        alt="Filha cumprimentando mae idosa no jardim"
        category="Bem-estar"
        title="Momentos de conexao no jardim"
        description="Atividades ao ar livre promovem bem-estar e fortalecem os lacos familiares."
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
        src={stockImages.atividadeJuntas}
        alt="Filha e mae idosa fazendo atividade juntas"
        category="Saude Mental"
        title="Atividades em familia"
        description="Momentos compartilhados que fortalecem o bem-estar emocional."
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
        src={stockImages.filhaMaeAbraco}
        alt="Filha abraçando mae idosa"
        category="Familia"
        title="Que tipo de ajuda seus pais precisam?"
        description="Descubra o nivel real de dependencia do seu familiar."
        imageAspect="feed"
        primaryAction={{ label: 'Avaliacao gratuita' }}
      />
    </div>
  ),
}

export const CardGrid: StoryObj = {
  name: 'ImageCard: Grid Layout',
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', maxWidth: '1000px' }}>
      <ImageCard
        src={stockImages.filhaMaeJardim}
        alt="Mae e filha no jardim"
        category="Atividades"
        title="Atividades ao ar livre"
        description="Beneficios comprovados para mente e corpo."
      />
      <ImageCard
        src={stockImages.atividadeJuntas}
        alt="Atividade em familia"
        category="Criatividade"
        title="Momentos em familia"
        description="Conexao e bem-estar compartilhados."
      />
      <ImageCard
        src={stockImages.idosaAtiva}
        alt="Idosa ativa"
        category="Independencia"
        title="Autonomia com seguranca"
        description="Envelhecimento ativo e saudavel."
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
        src={stockImages.cuidadoraIdosa}
        alt="Cuidadora ajudando mae idosa a caminhar"
        headline="Sera que estou fazendo o suficiente?"
        subheadline="A ciencia mostra que 90% dos filhos erram nos cuidados por falta de orientacao, nao de amor."
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
        src={stockImages.idosaAtiva}
        alt="Idosa ativa e saudavel"
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
        src={stockImages.conversaFeliz}
        alt="Mae e filha conversando felizes"
        headline="Avaliacao do nivel de dependencia senior"
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
        src="https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
        alt="Maria"
        size="sm"
      />
      <AvatarImage
        src="https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
        alt="Maria"
        size="md"
      />
      <AvatarImage
        src="https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
        alt="Maria"
        size="lg"
      />
      <AvatarImage
        src="https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
        alt="Maria"
        size="xl"
      />
      <AvatarImage
        src="https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
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
        src="https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
        alt="Cuidadora"
        size="xl"
        borderColor="#FF6A13"
      />
      <AvatarImage
        src="https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
        alt="Idosa"
        size="xl"
        borderColor="#003057"
      />
      <AvatarImage
        src="https://images.pexels.com/photos/3768146/pexels-photo-3768146.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
        alt="Familiar"
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
          src={stockImages.filhaMaeAbraco}
          alt="Filha abraçando mae idosa feliz"
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
          <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '8px', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
            Que tipo de ajuda seus pais precisam?
          </h2>
          <p style={{ fontSize: '14px', opacity: 0.9, marginBottom: '16px', textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
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
        story: 'Exemplo de post para Instagram Feed com imagem de cuidado intergeracional.',
      },
    },
  },
}

export const UseCaseWebsiteHero: StoryObj = {
  name: 'Caso de Uso: Website Hero',
  render: () => (
    <div style={{ width: '100%', maxWidth: '1200px' }}>
      <HeroImage
        src={stockImages.familiaReunida}
        alt="Familia reunida com idosa feliz"
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
          src={stockImages.filhaMaeJardim}
          alt="Mae e filha no jardim"
          category="Saude Mental"
          title="Momentos ao ar livre fortalecem a saude mental"
          primaryAction={{ label: 'Ler artigo' }}
        />
        <ImageCard
          src={stockImages.atividadeJuntas}
          alt="Atividade em familia"
          category="Criatividade"
          title="Atividades em familia: conexao e bem-estar"
          primaryAction={{ label: 'Ler artigo' }}
        />
        <ImageCard
          src={stockImages.cuidadoCasa}
          alt="Cuidado em casa"
          category="Movimento"
          title="Exercicios leves para manter a mobilidade"
          primaryAction={{ label: 'Ler artigo' }}
        />
      </div>
    </div>
  ),
}
