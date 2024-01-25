import React, { useState } from "react"
import searchImages from "./src/api.tsx"
import SearchBar from "./src/components/SearchBar.tsx"
import ImageList from "./src/components/ImageList.tsx"
import { DataObj } from "./src/types.tsx"

function App() {
  // set images to an empty array as default since unsplash data is array
  const [images, setImages] = useState<DataObj[]>([])

  /* ----- The below was before useState hook existed ----- */
  // constructor(props) {
  // 	super(props);
  // 	this.state = {
  // 		videos: [],
  // 		selectedVideo: null
  // 		// this.state.videos is set to an empty array because the result
  // 		//from console.log(videos) from below is an array
  // 	};
  // 	//initial search
  // 	searchImages()
  // }

  // callback function to pass selectedVideo from App to VideoList then to VideoListItem
  // selectVideo = (selectedVideo) => {
  // 	this.setState({ selectedVideo })
  // }
  /* ---------------------------- */

  const handleSubmit = async (term: string) => {
    console.log("search term:", term)
    const result: DataObj[] = await searchImages(term)

    setImages(result)
  }

  return (
    <div className="container-fluid">
      <h1>Unplash Image Search</h1>
      <SearchBar handleSearch={handleSubmit} />
      <ImageList images={images} />
    </div>
  )
}

export default App