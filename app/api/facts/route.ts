import type { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(req: NextApiRequest) {
    const RAPID_API_KEY = process.env.RAPID_API_KEY;

    try {
        const { data } = await axios.get('https://facts-by-api-ninjas.p.rapidapi.com/v1/facts', {
            params: { limit: 3 },
            headers: {
                'X-RapidAPI-Key': RAPID_API_KEY,
                'X-RapidAPI-Host': 'facts-by-api-ninjas.p.rapidapi.com',
            },
        });
        
        // Créez une NextResponse avec les données de la réponse
        return new NextResponse(JSON.stringify(data), {
            status: 200, // Statut HTTP de succès
            headers: {
                'Content-Type': 'application/json', // Spécifiez le type de contenu de la réponse
            },
        });
    } catch (error) {
        console.error(error);
        // Retournez une NextResponse avec un message d'erreur en cas d'échec
        return new NextResponse(JSON.stringify({ message: 'Erreur lors de la récupération des factss' }), {
            status: 500, // Statut HTTP pour une erreur serveur
            headers: {
                'Content-Type': 'application/json', // Spécifiez le type de contenu de la réponse
            },
        });
    }
}
