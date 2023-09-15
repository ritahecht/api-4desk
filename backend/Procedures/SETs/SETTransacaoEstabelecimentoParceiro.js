const { Pool } = require('pg');

// Função para inserir informações na tabela TransacaoEstabelecimentoParceiro
export async function SETTransacaoEstabelecimentoParceiro(client,TransacaoEstabelecimentoParceiro) {
await client.connect();
  
  try {
    const query = `
      INSERT INTO TransacaoEstabelecimentoParceiro (ParceiroID, EstabelecimentoID, EstabelecimentoEstoqueID, EstabelecimentoEstoqueDescricao, EstabelecimentoEstoqueQuantidade, ParceiroCreditoQuantidade)
      VALUES ($1, $2, $3, $4, $5, $6)
    `;

    const values = [TransacaoEstabelecimentoParceiro.parceiroID, TransacaoEstabelecimentoParceiro.estabelecimentoID, TransacaoEstabelecimentoParceiro.estoqueID, TransacaoEstabelecimentoParceiro.estoquedescricao,  TransacaoEstabelecimentoParceiro.quantidade, TransacaoEstabelecimentoParceiro.creditoquantidade];

    await client.query(query, values);

    console.log('Informações inseridas com sucesso na tabela TransacaoEstabelecimentoParceiro.');
  } catch (error) {
    console.error('Erro ao inserir informações na tabela TransacaoEstabelecimentoParceiro:', error);
  } finally {
    client.release(); // Libera o cliente de volta para o pool
  }
}