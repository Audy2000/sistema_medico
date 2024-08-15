export interface TableColumn {
    textoCabecera: string; // Nombre de la cabecera de la tabla
    nombreCampo: string;  // Nombre del campo correspondiente en los objetos de datos (rows)
    size?: string;  // Tamaño deseado para la columna (opcional)
  }
  
  export interface TableData {
    columns: TableColumn[]; // Array de columnas
    rows: any[]; // Array de filas, donde cada fila es de tipo T
    primaryKey: string;  
  }