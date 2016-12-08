import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { ProfilComponent } from './components/profil/profil.component';

const ApplicationRoutes: Routes = [
    {
        path: '',
        component: ProfilComponent
    },

    {
        path: 'connexion',
        component: ConnexionComponent
    }
];

export const AppModuleRoutes: ModuleWithProviders = RouterModule.forRoot(ApplicationRoutes);
