# Desafio Atleta Híbrido

Planejador e registro de treino. Funciona no navegador, instala como app no
celular e roda offline. Sem servidor, sem conta, sem login — tudo fica no
próprio aparelho.

## O que ele faz

- **Vários planos.** Um por pessoa ou por ciclo, cada um com histórico próprio.
- **Blocos com tipo.** Série direta, superset, tri-set, circuito e por tempo.
  O tipo controla onde entra o descanso.
- **Catálogo de 873 exercícios**, todos com **foto real** (posição inicial e
  final), busca em português, grupo muscular e equipamento. O nome que vai
  para o plano é o que você digitar.
- **Fotos do plano embutidas.** Os exercícios do plano inicial trazem as fotos
  dentro do próprio `index.html` (base64, 420px, ~18 KB cada) e funcionam
  offline e atrás de rede filtrada — a situação de academia. Os demais
  carregam do GitHub na primeira visualização e ficam em cache. Se falharem,
  entra uma ilustração esquemática do padrão de movimento.
- **Registro de carga por mês**, com volume calculado e diferença mês a mês.
- **Compartilhamento por código de texto.** Um plano de 4 dias vira ~750
  caracteres, colável no WhatsApp.
- **Backup completo** em código de texto, para sobreviver a troca de aparelho.

## Publicar no GitHub Pages

1. Crie um repositório **público** e suba os quatro arquivos na raiz:
   `index.html`, `manifest.json`, `sw.js`, `icon.svg`.
2. No repositório: **Settings → Pages**.
3. Em *Source*, escolha **Deploy from a branch**; em *Branch*, `main` e
   pasta `/ (root)`. Salve.
4. Aguarde 1–2 minutos. O endereço será
   `https://<seu-usuario>.github.io/<nome-do-repo>/`.

O repositório precisa ser público para o Pages funcionar no plano gratuito.

### Instalar no celular

Abra o endereço no navegador do celular e use "Adicionar à tela de início"
(Android: menu do Chrome; iPhone: botão de compartilhar no Safari). A partir
daí ele abre em tela cheia e funciona sem internet.

Instalar como app também ajuda na durabilidade dos dados: o app pede
armazenamento persistente ao navegador, e um app instalado tem mais chance
de ter esse pedido concedido. Isso reduz o risco, mas **não elimina** —
por isso o backup existe.

### Ao publicar uma atualização

Depois de trocar o `index.html`, **incremente a versão do cache no `sw.js`**:

```js
const CACHE = 'atleta-hibrido-v9';   // → v10, v11, ...
```

Sem isso o service worker continua servindo a versão antiga do cache e a
atualização não aparece em quem já abriu o app.

## Estrutura

| Arquivo | Papel |
|---|---|
| `index.html` | O app inteiro — interface, lógica, catálogo e ilustrações embutidos |
| `manifest.json` | Metadados do PWA (nome, ícone, cor, tela cheia) |
| `sw.js` | Service worker — cache e funcionamento offline |
| `icon.svg` | Ícone do app |

Os três últimos existem só para o PWA. O `index.html` sozinho funciona.

Os caminhos são todos relativos (`./`). Isso é necessário porque o GitHub
Pages serve o projeto em `/<repo>/` e não na raiz do domínio — caminho
absoluto apontaria para fora do projeto.

## Onde ficam os dados

Em `localStorage`, no aparelho, sob a chave `atleta_hibrido_v3`. Nada é
enviado para lugar nenhum: o projeto não tem servidor nem telemetria.

A contrapartida é que os dados somem se você limpar os dados de navegação,
desinstalar o app ou trocar de celular. Use **Planos → Gerar backup** e
guarde o código onde você consiga recuperar depois. O app avisa sozinho
quando o último backup passa de 14 dias.

**Planos e histórico viajam separados, de propósito.** O código de
compartilhamento contém apenas o plano. Reenviar um plano corrigido para
alguém nunca apaga as cargas que a pessoa já registrou.

## Créditos e licença

Exercícios e fotos vêm de
[free-exercise-db](https://github.com/yuhonas/free-exercise-db), sob
**Unlicense** (domínio público) — dados **e** imagens. Os dados derivam de
[wrkout/exercises.json](https://github.com/wrkout/exercises.json), também
domínio público.

Verificado antes do uso: o `LICENSE` de ambos é a Unlicense íntegra, sem seção
de exceção de mídia, e não existe `NOTICE`, `ATTRIBUTION` nem `MEDIA_LICENSE`.
Domínio público **dispensa atribuição** — o crédito aqui e na tela de Regras
está por escolha, não por obrigação.

As ilustrações esquemáticas de reserva foram desenhadas para este projeto.

O código deste projeto é seu para usar como quiser.

## Aviso

Este app é uma ferramenta de registro, não prescrição de treino. Os avisos
de segurança que aparecem nos exercícios são os que você mesmo escreveu no
plano. Nada aqui substitui avaliação de um educador físico, fisioterapeuta
ou médico.
