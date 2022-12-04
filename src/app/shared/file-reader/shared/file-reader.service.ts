import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileReaderService {
  getDataFromFile(file: File): Observable<string> {
    return new Observable(observer => {
      const reader = new FileReader();
      reader.readAsText(file, 'UTF-8');
      reader.onload = () => {
        const { result } = reader;
        if (typeof result === 'string') {
          const fileContent = JSON.parse(result);
          observer.next(fileContent);
          observer.complete();
        }
      };

      reader.onerror = () => {
        observer.error(reader.error);
      };
    });
  }
}
