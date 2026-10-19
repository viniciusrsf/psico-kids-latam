# Localização automática dos preços

## Objetivo
Exibir todos os preços da página na moeda estimada do visitante, mantendo USD como base e sem alterar checkout, links Hotmart, compra ou rastreamento.

## Implementação
- Criar um serviço interno leve que identifica o país pelos cabeçalhos de localização da hospedagem, com fallback seguro para USD.
- Mapear países para moedas, incluindo todos os mercados solicitados; Panamá será exibido em USD para manter uma referência clara e amplamente aceita localmente.
- Consultar cotações atuais em USD pela API pública Frankfurter, que reúne fontes oficiais, sem chave privada.
- Manter as cotações em cache por 12 horas no serviço e a preferência detectada no navegador por 24 horas, evitando consultas repetidas.
- Criar um único componente de preço para formatar valores com `Intl.NumberFormat`, locale e casas decimais adequadas.
- Substituir somente os textos monetários visíveis: bônus, preços riscados, preços atuais, economias e valores do pop-up.
- Exibir discretamente “Precio aproximado en tu moneda” quando houver conversão; em USD, manter a apresentação normal.
- Reservar o espaço dos preços enquanto a detecção rápida ocorre, evitando troca visual brusca; se houver qualquer falha, mostrar imediatamente os valores-base em USD.

## Preservação obrigatória
- Manter exatamente os três links e parâmetros atuais da Hotmart.
- Não enviar moeda, preço ou cotação ao checkout.
- Não modificar botões, IDs, classes de GTM, eventos, scripts ou integrações de rastreamento.
- Não alterar design, textos, imagens, seções ou responsividade além do mínimo necessário junto aos preços.

## Validação
- Testar Brasil, México, Colômbia, Chile, Peru, Argentina, Guatemala, Costa Rica, Honduras, El Salvador, Panamá, Espanha e Estados Unidos.
- Simular indisponibilidade da localização e da cotação e confirmar fallback em USD.
- Conferir mobile e desktop, ausência de mudanças nos links Hotmart e no Google Tag Manager, e carregamento sem erros.

## Detalhes técnicos
- Endpoint público somente de leitura, com validação dos códigos de país e respostas pequenas.
- API de câmbio: Frankfurter (`api.frankfurter.dev`), com base USD.
- Cache HTTP compartilhado de 12 horas e cache local da localização por 24 horas.
- Valores-base permanecem constantes numéricas em USD no código da página.
