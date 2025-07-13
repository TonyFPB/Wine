import connection from "../database/database.js"


export async function recuperarVinhosPorNome(nome) {
  console.log(nome)
  const vinhos = await connection.query(`
    SELECT v.vinho_id, v.nome, YEAR(v.safra) as safra 
    FROM Vinho v 
    WHERE v.nome LIKE ?`, [`%${nome}%`]);
  console.log(vinhos)
  return vinhos[0];
}


export async function recuperarVinhoPorId(id) {
  console.log(id)
  const [vinhos] = await connection.query(`
    select distinct v.vinho_id, vin.vinicola_id, vin.nome as vinicola, v.nome as vinhoNome, YEAR(v.safra) as safra , vin.pais
      from Vinho v
        join Avaliacao a on v.vinho_id = a.fk_Vinho_vinho_id
        join Vinicola vin on v.fk_Vinicola_vinicola_id = vin.vinicola_id
        join Usuario u on a.fk_Usuario_usuario_id = u.usuario_id
    WHERE v.vinho_id = ?`, [`${id}`]);

  const avaliacoes = await connection.query(`
    select distinct u.nome as donoComentario ,a.nota, a.comentario 
      from Vinho v
        join Avaliacao a on v.vinho_id = a.fk_Vinho_vinho_id
        join Vinicola vin on v.fk_Vinicola_vinicola_id = vin.vinicola_id
        join Usuario u on a.fk_Usuario_usuario_id = u.usuario_id
    WHERE v.vinho_id = ?`, [`${id}`]);
  const response = {
    vinho: vinhos[0],
    avaliacoes: avaliacoes[0]
  } 
  console.log(vinhos)
  return response;
}