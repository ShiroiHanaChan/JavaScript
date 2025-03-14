inicio
    real tempo_gasto, velocidade_media
    ler tempo_gasto // minutos
    ler velocidade_media // kmh
    
    tempo_gasto <- tempo_gasto / 60
    
    real distancia <- tempo_gasto * velocidade_media
    real litros_gastos <- distancia / 12
    
    escrever "Velocidade média: ", velocidade_media, " \nDistância percorrida: ", distancia," Km\nLitros de combustível usados: ", litros_gastos, "L\nTempo gasto: ", tempo_gasto, "H"
fim