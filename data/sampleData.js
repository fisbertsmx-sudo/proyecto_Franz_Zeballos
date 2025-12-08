const createSvgImage = (color, text) => `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect fill='${encodeURIComponent(color)}' width='600' height='400'/%3E%3Ctext x='50%25' y='50%25' font-size='48' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='middle' font-family='Arial'%3E${encodeURIComponent(text)}%3C/text%3E%3C/svg%3E`

export const products = [
  {id: '1', title: 'Bicicleta urbana', condition: 'Usado', price: 120, distance: '2km', image: createSvgImage('#FF6B6B', '🚴')},
  {id: '2', title: 'Máquina de café', condition: 'Nueva', price: 300, distance: '5km', image: createSvgImage('#4ECDC4', '☕')},
  {id: '3', title: 'Silla de madera', condition: 'Usado', price: 45, distance: '1.2km', image: createSvgImage('#95E1D3', '🪑')},
  {id: '4', title: 'Laptop usada', condition: 'Usado', price: 450, distance: '3km', image: createSvgImage('#F38181', '💻')},
  {id: '5', title: 'Lámpara LED', condition: 'Nueva', price: 65, distance: '1.5km', image: createSvgImage('#FFD93D', '💡')},
  {id: '6', title: 'Estantería', condition: 'Usado', price: 85, distance: '2.5km', image: createSvgImage('#A8D8EA', '📚')}
]

export const user = {
  name: 'Franz Z',
  initials: 'FZ',
  level: 'Embajador Circular',
  credits: 420,
  kg_saved: 32,
  items_saved: 14
}

export const posts = [
  {id:'p1', author:'Ana', time:'2h', content:'Intercambié una lámpara hoy, ¡qué satisfacción!', likes:12, comments:3},
  {id:'p2', author:'Carlos', time:'1d', content:'Alguien tiene una silla extra?', likes:4, comments:1}
]
