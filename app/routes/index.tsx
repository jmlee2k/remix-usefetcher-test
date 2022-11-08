import { useFetcher } from '@remix-run/react';
import type { loader } from './search';

export default function Index()
{
	const chars = useFetcher<typeof loader>();
	
	return <>
		<div>
			<label>
				search&nbsp;
				<input
					type="text"
					onChange={e=>{chars.submit({ q: e.target.value },{ method: 'get', action: '/search' });}}
				/>
			</label>
		</div>
		<pre>{JSON.stringify(chars.data)}</pre>
	</>
}
