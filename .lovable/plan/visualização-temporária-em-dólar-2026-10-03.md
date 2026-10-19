# Visualização temporária em dólar

## Implementação
- Aceitar `currency=USD` na URL como modo de teste da página.
- Nesse modo, mostrar todos os valores visuais em USD, com os centavos exatos: $6,90, $9,90 e $12,90.
- Manter a localização automática normal quando o parâmetro não estiver presente.
- Não alterar checkout Hotmart, links, rastreamento ou preços reais.

## Validação
- Abrir a página com `currency=USD` e conferir os preços principais e do pop-up.
- Confirmar que a página sem o parâmetro continua usando a moeda do visitante.
