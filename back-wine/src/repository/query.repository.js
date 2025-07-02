import connection from "../database/database.js"


export async function recuperarAvaliacaoAcimaDaNota() {
  const vinhos = await connection.query(`select u.usuario_id, u.nome as usuario_nome,v.vinho_id, v.nome as vinho, a.comentario, a.nota 
    from Usuario u 
      join Avaliacao a ON u.usuario_id = a.fk_Usuario_usuario_id 
      join Vinho v ON a.fk_Vinho_vinho_id = v.vinho_id 
    where a.nota >= 60 limit 20;`);
  return vinhos[0];
}

export async function recuperarQuantidadeAvaliacoes() {
  const qtdAv = await connection.query(`select v.vinho_id,v.nome, COUNT(v.vinho_id) as 'quantidade_de_avaliaçoes' from Usuario u 
	  join Avaliacao a ON u.usuario_id = a.fk_Usuario_usuario_id 
	  join Vinho v ON a.fk_Vinho_vinho_id = v.vinho_id
  group by v.vinho_id limit 10;`);
  return qtdAv[0];
}

export async function recuperarMediaVinhosPais() {
  const mediaVinhos = await connection.query(`select vin.pais , AVG(a.nota) as 'media' from Usuario u 
	  join Avaliacao a ON u.usuario_id = a.fk_Usuario_usuario_id 
	  join Vinho v ON a.fk_Vinho_vinho_id = v.vinho_id
	  join Vinicola vin on v.fk_Vinicola_vinicola_id = vin.vinicola_id 
  group by vin.pais;`);
  return mediaVinhos[0];
}

export async function recuperarUsuariosSemAvaliacoes() {
  const usuarios = await connection.query(`select u.usuario_id,u.nome from Usuario u 
    left join Avaliacao a on u.usuario_id = a.fk_Usuario_usuario_id 
  where a.fk_Vinho_vinho_id is null limit 10`)
  return usuarios[0];
}


export async function recuperarVinhosAvaliadosPorUsuariosExperientes() {
  const vinhos = await connection.query(`select distinct v.vinho_id, vin.vinicola_id, vin.nome as vinicola, v.nome, YEAR(v.safra) as safra , vin.pais, a.nota
  from Vinho v
    join Avaliacao a on v.vinho_id = a.fk_Vinho_vinho_id
    join Vinicola vin on v.fk_Vinicola_vinicola_id = vin.vinicola_id
  where a.nota > (
    select AVG(a2.nota)
    from Avaliacao a2
    join Vinho v2 on a2.fk_Vinho_vinho_id = v2.vinho_id
    join Vinicola vin2 on v2.fk_Vinicola_vinicola_id = vin2.vinicola_id
    where vin2.pais = vin.pais
) limit 10;;`)
  return vinhos[0];
}