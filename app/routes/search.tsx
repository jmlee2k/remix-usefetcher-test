import { json, type LoaderArgs } from '@remix-run/node';

const CHARS = ['Homer', 'Bart', 'Marge', 'Lisa', 'Maggie', 'Hank'];

export async function loader({request}:LoaderArgs)
{
	await new Promise(r=>setTimeout(r,4000));
	const search = new URL(request.url).searchParams.get("q");
	
	if (!search)
		return json([]);
	
	return json(CHARS.filter(c=>c.toLowerCase().startsWith(search.toLowerCase())));
}