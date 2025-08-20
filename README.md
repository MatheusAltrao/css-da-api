# 🎨 Sistema de Temas Dinâmicos com API

Este projeto demonstra como criar um **sistema de temas dinâmicos** que recebe configurações de cores de uma API e aplica automaticamente no design da aplicação.

## 🚀 O que faz este projeto?

Imagine que você tem um sistema onde cada cliente pode ter suas próprias cores personalizadas. Este projeto mostra como:

1. **Receber cores de uma API** - Simula uma API que retorna diferentes configurações de tema
2. **Aplicar cores automaticamente** - As cores são aplicadas em tempo real sem reload da página
3. **Suportar múltiplos temas** - Light, Dark e temas completamente personalizados
4. **Manter performance** - Usa CSS nativo para temas padrão e JavaScript apenas para personalizações

## ✨ Como funciona?

### 🎯 **Estratégia Híbrida**

- **Temas Light/Dark**: Definidos em CSS para máxima performance
- **Temas Personalizados**: Aplicados via JavaScript quando vêm da API
- **Cores Semânticas**: Sistema baseado em propósito (primary, secondary, background, etc.)

### 🛠️ **Tecnologias Utilizadas**

- **React 19** - Usando o novo hook `use()` para Promises
- **TypeScript** - Tipagem completa do sistema de cores
- **Tailwind CSS** - Com configuração customizada usando `@theme`
- **OKLCH** - Espaço de cores moderno para melhor controle visual
- **CSS Custom Properties** - Variáveis CSS para aplicação dinâmica

### 📊 **Estrutura do Sistema**

```
🎨 Sistema de Cores
├── 🌅 Tema Light (CSS nativo)
├── 🌙 Tema Dark (CSS nativo)
└── ✨ Temas Personalizados (API + JavaScript)
```

## 🎪 Demonstração

O projeto inclui:

- **Cards responsivos** com diferentes variações
- **Paleta de cores completa** mostrando todas as variações
- **Escala de cinza dinâmica** que se adapta ao tema
- **Botões com diferentes tamanhos** usando as cores do tema
- **Transições suaves** entre mudanças de tema

## 🔧 Como executar

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 📝 Casos de Uso Reais

Este padrão é ideal para:

- **Sistemas multi-tenant** onde cada cliente tem sua identidade visual
- **White-label applications** que precisam se adaptar à marca do cliente
- **Dashboards corporativos** com temas personalizados por empresa
- **Aplicações SaaS** que oferecem personalização visual como diferencial

---

## ⚡ Detalhes Técnicos

### Arquitetura CSS

```css
@theme {
  /* Cores base do sistema */
}
.light {
  /* Variações específicas do tema claro */
}
.dark {
  /* Tema escuro completo */
}
.custom {
  /* Aplicado via JavaScript para temas da API */
}
```

### Hook Personalizado

```tsx
const { theme, isPending } = useApplyTheme();
// Gerencia a aplicação automática de temas vindos da API
```

### Tipagem TypeScript

```typescript
interface ThemeResponseProps {
  clientId: string;
  themeType: "light" | "dark" | "custom";
  customColors?: CustomColors;
}
```

### API Response Example

```json
{
  "clientId": "client-premium",
  "themeType": "custom",
  "customColors": {
    "primary": "oklch(0.65 0.18 290)",
    "secondary": "oklch(0.70 0.15 45)",
    "background": "oklch(0.98 0.01 290)",
    "grayScale": {
      "50": "oklch(0.98 0.01 290)",
      "100": "oklch(0.95 0.02 290)",
      "500": "oklch(0.55 0.08 290)",
      "900": "oklch(0.18 0.03 290)"
    }
  }
}
```

## 🏗️ Arquitetura

### Fluxo de Dados

1. **API Simulation** (`constants/colors.ts`) - Simula diferentes respostas da API
2. **Theme Hook** (`hook/use-apply-theme.tsx`) - Gerencia estado e aplicação de temas
3. **CSS Variables** (`index.css`) - Define variáveis base e temas padrão
4. **Components** - Consomem as cores via classes semânticas

### Performance

- **CSS First**: Temas light/dark usam CSS compilado (0ms de aplicação)
- **Dynamic Only When Needed**: JavaScript apenas para temas customizados
- **Semantic Colors**: Facilita manutenção e mudanças de design
- **Type Safety**: Prevenção de erros com TypeScript

Este projeto demonstra uma abordagem profissional e escalável para sistemas de temas dinâmicos, combinando performance, flexibilidade e experiência do usuário.

---

### 🎯 **Principais Aprendizados**

1. **Estratégia Híbrida é Eficiente**: CSS para padrões, JS para customização
2. **OKLCH é Superior**: Melhor controle de luminosidade que RGB/HSL
3. **Semântica Importa**: Cores por propósito facilita manutenção
4. **TypeScript Previne Erros**: Especialmente em sistemas complexos de temas
5. **Performance Matters**: Nem tudo precisa ser dinâmico via JavaScript
