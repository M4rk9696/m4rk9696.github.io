const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig} = this.props;
    const {baseUrl} = siteConfig;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
        <span className="logo-text">Nimalan aka Mark</span>
        {/* <img id="euler-logo" src="https://projecteuler.net/profile/nimalan.png" alt="nimalan.m"></img> */}
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/mandel.png`} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          {/* <PromoSection>
            <Button href="#try">Try It Out</Button>
            <Button href={docUrl('doc1.html')}>Example Link</Button>
            <Button href={docUrl('doc2.html')}>Example Link 2</Button>
          </PromoSection> */}
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const CodeArtSection = () => (
      <Block id="try">
        {[
          {
            content:
              'Fancy and obscure code which I have made',
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: 'left',
            title: 'Code Art',
          },
        ]}
      </Block>
    );

    const Featured = () => (
      <Block layout="fourColumn">
        {[
          {
            content: '',
            image: `${baseUrl}img/undraw_programming_2svr.svg`,
            imageAlign: 'top',
            imageAlt: 'My Projects',
            imageLink: 'https://github.com/M4rk9696',
            title: 'Projects'
          },
          {
            content: '',
            image: `${baseUrl}img/undraw_blogging_vpvv.svg`,
            imageAlign: 'top',
            imageAlt: 'My Non Tech Blog',
            imageLink: siteConfig.baseUrl + 'blog',
            title: 'Non Tech Blog'
          },
          {
            content: '',
            image: `${baseUrl}img/undraw_blog_anyj.svg`,
            imageAlign: 'top',
            imageAlt: 'My Tech Blog',
            imageLink: siteConfig.baseUrl + 'blog',
            title: 'Tech Blog'
          },
        ]}
      </Block>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className='mainContainer'>
          <Featured />
          {/* <CodeArtCallout /> */}
          {/* <Description /> */}
        </div>
      </div>
    );
  }
}

module.exports = Index;
