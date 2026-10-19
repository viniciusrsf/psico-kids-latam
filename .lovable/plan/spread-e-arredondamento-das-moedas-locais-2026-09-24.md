# Spread e arredondamento das moedas locais

## Alteração
- Manter todos os preços-base internos em USD.
- Aplicar um acréscimo visual de 5% após a conversão para qualquer moeda local.
- Arredondar o resultado sempre para cima até a próxima unidade inteira da moeda.
- Não aplicar spread nem arredondamento quando o visitante estiver vendo os preços-base em USD.

## Preservação
- Não alterar links, parâmetros ou checkout da Hotmart.
- Não alterar GTM, eventos, pixels ou rastreamento.
- Não alterar o design, exceto os números exibidos pela conversão.

## Validação
- Conferir moedas com duas e zero casas decimais, incluindo BRL, MXN, COP e EUR.
- Confirmar que USD e o fallback continuam exibindo os valores-base originais.
