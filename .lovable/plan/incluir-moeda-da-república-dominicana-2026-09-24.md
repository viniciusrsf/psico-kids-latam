# Incluir moeda da República Dominicana

## Alteração
- Mapear o país `DO` para peso dominicano (`DOP`) e formatação local em espanhol da República Dominicana.
- Manter a regra atual: cotação USD, acréscimo visual de 5% e arredondamento para o próximo inteiro.
- Preservar integralmente os links e valores do checkout Hotmart e o rastreamento.

## Validação
- Simular um acesso da República Dominicana e confirmar que os preços aparecem em `RD$`.
- Confirmar que o fallback em USD e os demais países continuam inalterados.
