import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'member'})
export class MemberPipe implements PipeTransform {
  transform(members: any) {
    const arr = [];
    members.map(member => {
      if (!member['former']) {
        arr.push(member.name);
      }
    });
    return arr;
  }
}
