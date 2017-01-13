// truncate.ts
import { Pipe } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe {
  transform(value: string, _limit: string) : string {
    let limit = parseInt(_limit, 10);
    let trail = '...';
    return value.length > limit ? value.substring(0, limit) + trail : value;
  }
}