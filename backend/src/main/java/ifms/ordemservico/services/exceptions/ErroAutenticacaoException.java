package ifms.ordemservico.services.exceptions;

public class ErroAutenticacaoException extends RuntimeException{
	private static final long serialVersionUID = 1L;

	public ErroAutenticacaoException(String msg) {
		super(msg);
	}

}
