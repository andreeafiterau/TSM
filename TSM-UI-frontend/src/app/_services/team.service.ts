import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from '@/_models';

@Injectable({ providedIn: 'root' })
export class TeamService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Team[]>(`${config.apiUrl}/teams`);
    }

    
}