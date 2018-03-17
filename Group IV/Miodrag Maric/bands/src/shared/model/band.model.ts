import { Member } from './member.model';
import { Album } from './album.model';

export class Band {

  constructor(
    public name: string,
    public active: boolean,
    public tags: Array<string>,
    public members: Member[],
    public albums: Album[]
  ) {}

}
