const coinConvert = (dollars) => {
    // Asigna el monto equivalente en soles
    const soles=dollars*3.25 /* ??? */;
  
    // Asigna el monto equivalente en pesos mexicanos
    const pesosMexicanos=dollars*18 /* ??? */;
  
    // Asigna el monto equivalente en pesos chilenos
    const pesosChilenos=dollars*660 /* ??? */;
  
    return ["El valor en soles es ", soles, "El valor en pesos mexicanos es ", pesosMexicanos, pesosChilenos];
  }
  document.write(coinConvert(165))

