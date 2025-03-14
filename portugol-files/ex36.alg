inicio
    inteiro zero <- 0, one <- 1, sum
    
    inteiro loops <- 1
    enquanto loops <= 15 faz
        sum <- (zero + one)
        // shift numbers
        zero <- one
        one <- sum
        loops <- loops + 1
    fimenquanto
    escrever "Final sum: ", sum - 1 // to correct calculation
fim
    