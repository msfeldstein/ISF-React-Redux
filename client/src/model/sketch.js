import defaultFS from './assets/default_fs'
import defaultVS from './assets/default_vs'

export default class Sketch {
  constructor() {
    this.id = -1;
    this.raw_fragment_source = defaultFS;
    this.raw_vertex_source = defaultVS;
  }
}