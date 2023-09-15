const { Pool } = require('pg');

// Função para inserir informações na tabela TransacaoEstabelecimentoEmpresa
export async function SETTransacaoEstabelecimentoEmpresa(client,TransacaoEstabelecimentoEmpresa) {
await client.connect();
  
  try {
    const query = `
      INSERT INTO TransacaoEstabelecimentoEmpresa (EmpresaID, EstabelecimentoID, TransacaoEstabelecimentoEmpresaDescricao, TransacaoEstabelecimentoEmpresaData, TransacaoEstabelecimentoEmpresaCreditos )
      VALUES ($1, $2, $3, $4, $5)
    `;

    const values = [TransacaoEstabelecimentoEmpresa.empresaID, TransacaoEstabelecimentoEmpresa.estabelecimentoID,TransacaoEstabelecimentoEmpresa.descricao, TransacaoEstabelecimentoEmpresa.data, TransacaoEstabelecimentoEmpresa.creditos,];

    await client.query(query, values);

    console.log('Informações inseridas com sucesso na tabela TransacaoEstabelecimentoEmpresa.');
  } catch (error) {
    console.error('Erro ao inserir informações na tabela TransacaoEstabelecimentoEmpresa:', error);
  } finally {
    client.release(); // Libera o cliente de volta para o pool
  }
}