
import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class test_carlottoEric {
  @Test
  public void entrada_556_saida_0_9_16() {
    assertEquals("0:9:16", Relogio.calcula(556));
  }
}
