inicio
    real A, B
    ler A
    ler B
    real calc
    
    se A > B entao
        calc <- A - B
        escrever "Resultado: ", calc
    se A < B entao
        calc <- B - A
        escrever "Resultado: ", calc
        fimse
    senao
        escrever "Os valores devem ser diferentes!"
    fimse
fim