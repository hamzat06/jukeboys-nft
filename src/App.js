import { Component } from "react";
import {
  Navbar,
  Hero,
  About,
  Features,
  Team,
  Faqs,
  Community,
  Footer,
  Loader,
  Modal,
  PreFooter,
  Roadmap
} from "./componentImports";

import {
  Logo,
  Twitter,
  Instagram,
  TwitterB,
  InstagramB,
  DiscordB
} from "./imageImports";

import {
  toggleNav,
  loader,
  featuresArray,
  teamMembers,
  faqs,
  modalOpen,
  modalData,
  modalDataSingle,
  roadmapData
} from "./stateData";



class App extends Component {

  constructor () {
    super();
    this.state = {
      toggleNav,
      loader,
      featuresArray,
      teamMembers,
      faqs,
      modalOpen,
      modalData,
      modalDataSingle,
      roadmapData
    }
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({ loader: false }); 
    }, 3000);
  }

  render () {

    const toggleNavbar = () => { this.setState({ toggleNav: !this.state.toggleNav })}
    const closeModal = () => {
      this.setState({ modalOpen: false });
      this.setState({ modalDataSingle: {} })
    }
    const openModal = (id) => {
      this.setState({ modalOpen: true });
      let data = this.state?.modalData?.find((element) => {
        return element?.id === id
      })
      this.setState({ modalDataSingle: data });
    }

    const nextModalData = (id) => {
        let next = id+=1
        let data = this.state.modalData.find((data) => {
          return data.id === next
        })
        this.setState({ modalDataSingle: data })
    }

    const previousModal = (id) => {
      let previous = id-=1
        let data = this.state.modalData.find((data) => {
          return data.id === previous
        })
        this.setState({ modalDataSingle: data })
    }

    return (
      <>
        {
          this.state.loader ? (
            <Loader Logo={Logo} />
          ):(
            <>
              <Modal modalOpen={this.state.modalOpen} closeModal={closeModal} data={this.state.modalDataSingle} nextModalData={nextModalData} previousModal={previousModal} />
              <Navbar toggleNavbar={toggleNavbar} toggleNav={this.state.toggleNav} Twitter={TwitterB} Instagram={InstagramB} Logo={Logo} Discord={DiscordB} />
              <Hero/>
              <About/>
              <Features featuresArray={this.state.featuresArray} />
              <Roadmap roadmapData={this.state.roadmapData} />
              <Team teamMembers={this.state.teamMembers} />
              <Faqs faqs={this.state.faqs} />
              <Community Twitter={Twitter} Instagram={Instagram} />
              <PreFooter modalData={this.state.modalData} openModal={openModal} />
              <Footer/>
            </>
          ) 
        }
      </>
    )
  }
}

export default App;
