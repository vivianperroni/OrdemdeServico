INSERT INTO tb_servidor(nome, telefone, email, senha)
	VALUES('Vivian Perroni', '(67)99915-3265', 'vivian@gmail.com', 'vpo');
	
INSERT INTO tb_servidor(nome, telefone, email, senha)
	VALUES('Miley Cyrus', '(67)3409-1530', 'miley@gmail.com', 'hanna');
	
INSERT INTO tb_ordem_de_servico(equipamento, patrimonio, setor, descricao_problema, data_cadastro, status, prioridade, descricao_solucao, servidor_id)
	VALUES('CPU', 'A050', 'NTI', 'Precisa de formatação', '2021-06-07 11:48:00', 'PENDENTE', 'ALTA', 'Foi adicionado um SSD', 1);
	
INSERT INTO tb_ordem_de_servico(equipamento, patrimonio, setor, descricao_problema, data_cadastro, status, prioridade, descricao_solucao, servidor_id)
	VALUES('Nobreak', 'A023', 'Cultura', 'Não está mantendo a energia', '2021-06-03 07:27:40', 'PENDENTE', 'ALTA', 'Terá que trocar as duas baterias', 2);