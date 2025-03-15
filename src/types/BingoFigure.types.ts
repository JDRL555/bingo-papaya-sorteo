export type Pattern = 
'b1' | 'i1' | 'n1' | 'g1' | 'o1' |
'b2' | 'i2' | 'n2' | 'g2' | 'o2' |
'b3' | 'i3' | 'n3' | 'g3' | 'o3' |
'b4' | 'i4' | 'n4' | 'g4' | 'o4' |
'b5' | 'i5' | 'n5' | 'g5' | 'o5'

export type FigurePattern = {
  [key in Pattern]: boolean  
}

export type FigureName = 'carton_lleno' | 'linea_horizontal' | 'linea_vertical' | 'figura_1' | 'figura_2' | 'figura_3' | 'figura_4' | 'figura_5' | string