import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

public class test_carlottoEric {
    @Test
    public void entrada_140153_saida_38_55_53() {
        assertEquals("38:55:53", Relogio.calcula(140153));
    }
}