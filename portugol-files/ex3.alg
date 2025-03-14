inicio
    caracter data
    escrever "Fº or Cº: "
    ler data
    
    real degrees
    
    real conv
    
    escolhe data
      caso "c" ou "C":
        escrever "Degrees: "
        ler degrees
        conv <- (degrees - 32) * (5 / 9)
        escrever "Fº: ", conv
      caso "f" ou "F":
        escrever "Degrees: "
        ler degrees
        conv <- (degrees * 1.8) + 32
        escrever "Cº: ", conv
      defeito:
        escrever "Não é uma unidade de temperatura válida!"
      fimescolhe
fim
