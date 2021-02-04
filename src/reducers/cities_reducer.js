export default function(state = null, action) {
  switch(action.type) {
    case 'CITY_SELECTED': {
      state
    }
    default: {
      return [
        { name: 'Paris', address: '16 Villa Gaudelet, 75011 Paris', slug: 'https://images.pexels.com/photos/1125212/pexels-photo-1125212.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' },
        { name: 'London', address: '14-22 Elder St, London E1 6BT', slug: 'https://images.pexels.com/photos/427679/pexels-photo-427679.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' },
        { name: 'Berlin', address: 'Rudi-Dutschke-Straße 26, 10969 Berlin', slug: 'https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' },
        { name: 'Bali', address: 'Jalan Raya Batu Bolong, Canggu, Badung Regency, Bali, Indonesia', slug: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' },
        { name: 'Budapest', address: 'Budapest, Hungary', slug: 'https://images.pexels.com/photos/73796/budapest-hungary-parliament-building-73796.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' },
        { name: 'Montréal', address: '5333, avenue Casgrain, 102, Montréal (Québec), H2T1X3', slug: 'https://images.pexels.com/photos/2901670/pexels-photo-2901670.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' },
        { name: 'Tokyo', address: '2-11-3 Meguro, Meguro-ku, Tokyo ', slug: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' },
        { name: 'Amsterdam', address: 'Overhoeksplein 2, 1031 KS Amsterdam', slug: 'https://images.pexels.com/photos/2031706/pexels-photo-2031706.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' },
        { name: 'Shanghai', address: '129 West Yan\'an Road, JingAn District, Shanghai', slug: 'https://images.pexels.com/photos/683419/pexels-photo-683419.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' },
        { name: 'Brussels', address: 'Place Sainte-Gudule 5, 1000 Brussels', slug: 'https://images.pexels.com/photos/1595085/pexels-photo-1595085.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' },
        { name: 'Lisbon', address: 'Avenida Casal Ribeiro 28, Lisbon', slug: 'https://images.pexels.com/photos/1559908/pexels-photo-1559908.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' },
        { name: 'Florianópolis', address: 'Rod. José Carlos Daux, 4150 - Saco Grande, Florianópolis - SC, 88032-005', slug: 'https://images.pexels.com/photos/155249/pexels-photo-155249.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' },
        { name: 'Chengdu', address: '399 Fucheng Avenue West Section, Chengdu, Sichuan, China', slug: 'https://images.pexels.com/photos/1643113/pexels-photo-1643113.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' },
        { name: 'Milan', address: 'Milan, Metropolitan City of Milan, Italy', slug: 'https://images.pexels.com/photos/2097092/pexels-photo-2097092.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' },
        { name: 'Rio de Janeiro', address: 'Rua Duque Estrada, 41 - Gávea, Rio de Janeiro', slug: 'https://images.pexels.com/photos/1804177/pexels-photo-1804177.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' },
      ];
    }
  }
}
