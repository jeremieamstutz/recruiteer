import { useState } from 'react'

import Layout from 'components/layout/layout'
import axios from 'axios'

// Ecris une belle lettre de motivation pour Microsoft

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et sollicitudin magna, pulvinar eleifend mauris. Sed condimentum lectus lectus, laoreet aliquam elit interdum id. Donec efficitur blandit quam at pellentesque. Quisque ac magna lacus. Etiam et nisi bibendum, rhoncus lectus et, laoreet ipsum. Aliquam eros ligula, aliquam vitae aliquet sit amet, bibendum in mauris. Morbi a justo vel eros egestas consequat.

Donec elementum libero feugiat neque semper malesuada. Sed egestas vehicula gravida. Nam varius felis eu orci bibendum vulputate. Mauris sodales tellus ante, eget gravida est posuere eget. Fusce pellentesque pharetra lorem nec convallis. Sed erat ante, porttitor in ultricies ac, venenatis sed ex. Nunc rutrum euismod nisl, eget mattis augue mollis eu. Nam vulputate, risus id convallis tempor, augue diam aliquet enim, at luctus nisi eros id ante. Mauris vitae aliquet enim. Phasellus eget leo sit amet dolor hendrerit suscipit quis eget enim. Praesent egestas pulvinar sem sit amet volutpat. Mauris nec vulputate augue. Fusce quis ligula ligula. Curabitur non neque faucibus, tincidunt nibh in, sodales enim. Nam a mi auctor, venenatis nisi id, convallis augue.

Suspendisse potenti. Etiam bibendum, mi vitae luctus tristique, orci lacus finibus felis, a faucibus mi elit quis odio. In hac habitasse platea dictumst. Quisque maximus risus ac magna rhoncus, et elementum libero pretium. Quisque eget dapibus odio, at ornare magna. Quisque pharetra risus vitae molestie ornare. Nunc nisl lectus, luctus eget elit ut, bibendum euismod elit. Vestibulum dictum risus nec arcu aliquam dignissim. Curabitur ac aliquam tellus, quis finibus sem. Phasellus mi ante, lacinia in nisl sed, tristique iaculis risus.

Nullam vel vehicula tellus, non elementum tellus. Ut fringilla, nunc a consectetur accumsan, elit tellus consectetur erat, id condimentum diam ante ac quam. Proin tempor, dui non ultrices facilisis, arcu metus auctor lacus, sed ullamcorper est ante sit amet mauris. Integer dictum facilisis faucibus. Nullam eu est sagittis, hendrerit nibh ut, sodales nibh. In urna odio, posuere a porta sit amet, venenatis et justo. Sed ut tincidunt nulla. Nullam ante felis, ornare vitae feugiat at, pretium sit amet eros.

Duis eu mollis ipsum, quis varius nisi. Vestibulum porta eros in congue egestas. Ut tincidunt pretium accumsan. Vestibulum molestie, elit sit amet rhoncus lobortis, ipsum mauris commodo sem, vitae blandit nisi tortor quis risus. Nulla at placerat enim. Aenean eget pellentesque nisi, sit amet congue nunc. Sed a ipsum id lectus gravida lobortis vitae quis nisl.`

export default function NewCoverLetterPage() {
	const [input, setInput] = useState('')
	const [loading, setLoading] = useState(false)
	const [text, setText] = useState(lorem)

	async function generateCoverLetter(event) {
		// event.preventDefault()
		// setLoading(true)
		// const res = await axios({
		// 	method: 'POST',
		// 	url: '/api/cover-letters',
		// 	data: {
		// 		prompt: input,
		// 	},
		// })
		// setText(res.data.choices[0].text)
		// setLoading(false)
	}

	return (
		<Layout>
			<h1>Create cover letter</h1>
			<form onSubmit={generateCoverLetter}>
				<input
					type="text"
					value={input}
					onChange={(event) => setInput(event.target.value)}
				/>
				<button type="submit" disabled={loading}>
					{loading ? 'Loading...' : 'Submit'}
				</button>
			</form>
			{text.split('\n').map((paragraph, index) => (
				<p key={index} style={{ maxWidth: '600px' }}>
					{paragraph}
				</p>
			))}
		</Layout>
	)
}
