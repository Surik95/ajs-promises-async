import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static async load() {
    try {
    const data = await read()
    return await json(data)
    } catch (e) {
      console.log(e)
    }
  }
}
