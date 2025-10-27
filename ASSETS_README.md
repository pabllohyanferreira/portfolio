# 📁 Assets - Vídeos dos Projetos

## 🎥 Vídeos Necessários

Para que o portfolio funcione completamente, você precisa adicionar os seguintes vídeos na pasta `src/assets/`:

### 📋 Lista de Vídeos:
1. **Torrescoffee.mp4** - Demonstração do projeto Torres Coffee
2. **Gueiros.mp4** - Demonstração do projeto DEPARA Gueiros

## 🚀 Alternativas para Hospedagem de Vídeos

### Opção 1: YouTube/Vimeo (Recomendado)
- Faça upload dos vídeos no YouTube ou Vimeo
- Use URLs embeddadas no código
- Vantagem: Sem limite de tamanho, carregamento rápido

### Opção 2: Cloud Storage
- Google Drive, Dropbox, OneDrive
- Gere links públicos para os vídeos
- Atualize as URLs no código

### Opção 3: CDN/Servidor Próprio
- Hospede em servidor próprio
- Use serviços como AWS S3, Cloudflare
- Controle total sobre os arquivos

## 🔧 Como Atualizar URLs

Edite o arquivo `src/components/ProjectsSection.tsx` e substitua:

```typescript
// De:
import TorrescoffeeVideo from '../assets/Torrescoffee.mp4';
import GueirosVideo from '../assets/Gueiros.mp4';

// Para:
const TorrescoffeeVideo = 'https://sua-url-do-video-1.mp4';
const GueirosVideo = 'https://sua-url-do-video-2.mp4';
```

## 📝 Nota
Os vídeos foram removidos do Git devido ao limite de 100MB do GitHub. Use uma das alternativas acima para hospedar os vídeos externamente.
