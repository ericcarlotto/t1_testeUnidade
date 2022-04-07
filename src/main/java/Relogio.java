public class Relogio {

  public static Object calcula(int i) {
    int hora = i / 3600;
    int minutos = (i % 3600) / 60;
    int segundos = (i % 3600) % 60;

    return hora + ":" + minutos + ":" + segundos;
  }

}
