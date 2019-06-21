import { Item } from './item';
import { UUID } from 'angular2-uuid';


export const ITEMS: Item[] = [
  { id: 11, name: 'Dr Nice', 'uuid': UUID.UUID() },
  { id: 12, name: 'Narco', 'uuid': UUID.UUID() },
  { id: 13, name: 'Bombasto', 'uuid': UUID.UUID() },
  { id: 14, name: 'Celeritas', 'uuid': UUID.UUID() },
  { id: 15, name: 'Magneta', 'uuid': UUID.UUID() },
  { id: 16, name: 'RubberMan', 'uuid': UUID.UUID() },
  { id: 17, name: 'Dynama', 'uuid': UUID.UUID() },
  { id: 18, name: 'Dr IQ', 'uuid': UUID.UUID() },
  { id: 19, name: 'Magma', 'uuid': UUID.UUID() },
  { id: 20, name: 'Tornado', 'uuid': UUID.UUID() }
];