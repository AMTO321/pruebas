class MiClase:
    """
    Clase que almacena atributos de tipo string, int, float y un caracter (string de longitud 1).
    """
    
    # El método constructor. Se ejecuta al crear un objeto.
    def __init__(self, texto, entero, decimal, letra):
        # 1. String (str)
        self.atributo_string = texto
        
        # 2. Entero (int)
        self.atributo_int = entero
        
        # 3. Flotante (float)
        self.atributo_float = decimal
        
        # 4. Caracter (char, en Python es un string de longitud 1)
        self.atributo_char = letra
    
    # Método para mostrar todos los atributos
    def mostrar_tipos(self):
        print("--- Atributos de la Instancia ---")
        print(f"String:   {self.atributo_string} (Tipo: {type(self.atributo_string).__name__})")
        print(f"Entero:   {self.atributo_int} (Tipo: {type(self.atributo_int).__name__})")
        print(f"Flotante: {self.atributo_float} (Tipo: {type(self.atributo_float).__name__})")
        print(f"Carácter: {self.atributo_char} (Tipo: {type(self.atributo_char).__name__})")