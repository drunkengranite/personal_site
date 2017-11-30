import React, {Component} from 'react'


class AboutBody extends Component {

	render = () =>
		<div className="about-container">
			<div className="about-text-wrapper">
				<h2>
					Hi. I’m Adam and I like coding.
				</h2>
				<p>

					When I was 20 years old I dropped out of UC Berkeley and fell in love with programming. I
					learned Android development while I worked at a hat shop, and was eventually able to get my
					first real developer job 4 months later.
				</p>

				<p>I love tinkering around, so I’ve played with most existing stacks, including the apache ecosystem (tomcat, hadoop),
					Unity and cool google libraries like groupcache. I suppose I love the “write once run everywhere” slogan,
					since I default to statically typed libraries that compile for most machines.

				</p>

				<p>
					Currently, I am experimenting with Kubernetes and Scaleway, attempting to construct a pgpool cluster
					and groupcache CDN without using kubeadm (it's hard without the bootstrapping magic).
				</p>
				<p>
					I'm also learning embedded devlopment and PCB construction, since IoT
					is the next big thing.
				</p>

				<br/>

				<h3>My Current Stack Philosophy:</h3>

				<h4 className="about-sub-header">Mobile</h4>
				<ul className="sub-header-list">
					<li>
						<strong>React Native</strong> is for apps that mainly work with no native/hardware
						implementations. The developer velocity by sharing the redux state and just rewriting views
						is very nice to have, especially since react-native comes with some very good profiling tools.
					</li>
					<li>
						For Apps that work with something more than just gps (like the camera or bluetooth) I firmly believe that
						writing it native is the way to go. Hardware specific functions shouldn't be homogenized.

						Spotify got it right, where their libraries are precompile binaries and the view wrappers/delivery
						systems are native.
					</li>
				</ul>

				<h4 className="about-sub-header">Web</h4>
				<ul className="sub-header-list">
					<li>
						I prefer <strong>React-Redux and Elm</strong>. Global stores are the way to go, and I <strong>really </strong>
						 hope that Elm gains popularity.
					</li>
					<li>
						For <strong>styling</strong>, I usually use sass/stylus, but I'm not super picky.
					</li>
				</ul>

				<h4 className="about-sub-header">Desktop Apps</h4>
				<ul className="sub-header-list">
					<li>
						I really only build with <strong>Electron</strong> for desktop applications. I feel like 3 OSes to target really is
						the tipping point for dealing with transcompiling issues. Dealing with three desktop environments
						is much more of a harm than the (admittedly frequent) chromium error.
					</li>
					<li>
						<strong>Java or Python</strong> GUI libraries are alternative options. I would consider using javaFX or tkinter if the application needed to be run
						either hyper efficient or mission critical, just because runtime errors are harder to testing in
						nodeJS
					</li>
				</ul>

			</div>
		</div>
}


export default AboutBody