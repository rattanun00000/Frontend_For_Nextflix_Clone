import React from 'react'

const TopTen = ({ width = 44, height = 44, className = '' }) => {
    return (
        <svg 
          width={width} 
          height={height} 
          viewBox="0 0 44 44" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M5 0C2.23858 0 0 2.23858 0 5V39C0 41.7614 2.23858 44 5 44H39C41.7614 44 44 41.7614 44 39V5C44 2.23858 41.7614 0 39 0H5ZM21.8743 17.256C22.7223 17.256 23.4903 17.112 24.1943 16.824C24.8823 16.536 25.4903 16.136 26.0023 15.608C26.5143 15.08 26.9143 14.472 27.2023 13.752C27.4743 13.048 27.6183 12.28 27.6183 11.432C27.6183 10.584 27.4743 9.816 27.2023 9.096C26.9143 8.392 26.5143 7.784 26.0023 7.256C25.4903 6.728 24.8823 6.328 24.1943 6.04C23.4903 5.752 22.7223 5.608 21.8743 5.608C21.0423 5.608 20.2743 5.752 19.5863 6.04C18.8823 6.328 18.2743 6.728 17.7783 7.256C17.2663 7.784 16.8663 8.392 16.5943 9.096C16.3063 9.816 16.1623 10.584 16.1623 11.432C16.1623 12.28 16.3063 13.048 16.5943 13.752C16.8663 14.472 17.2663 15.08 17.7783 15.608C18.2743 16.136 18.8823 16.536 19.5863 16.824C20.2743 17.112 21.0423 17.256 21.8743 17.256ZM21.8743 14.952C21.2823 14.952 20.7543 14.808 20.2903 14.504C19.8263 14.216 19.4583 13.8 19.2023 13.272C18.9303 12.744 18.8023 12.136 18.8023 11.432C18.8023 10.728 18.9303 10.104 19.2023 9.576C19.4583 9.048 19.8263 8.648 20.2903 8.344C20.7543 8.056 21.2823 7.912 21.8743 7.912C22.4823 7.912 23.0263 8.056 23.4903 8.344C23.9543 8.648 24.3063 9.048 24.5783 9.576C24.8503 10.104 24.9783 10.728 24.9783 11.432C24.9783 12.136 24.8503 12.744 24.5783 13.272C24.3063 13.8 23.9543 14.216 23.4903 14.504C23.0263 14.808 22.4823 14.952 21.8743 14.952ZM11.8684 17V8.12H15.4044V5.864H5.72444V8.12H9.26044V17H11.8684ZM31.9553 17H29.3473V5.864H33.9553C34.8673 5.864 35.6673 6.024 36.3233 6.344C36.9793 6.664 37.4913 7.112 37.8433 7.688C38.1953 8.264 38.3713 8.936 38.3713 9.704C38.3713 10.472 38.1953 11.144 37.8433 11.72C37.4913 12.312 36.9793 12.76 36.3233 13.08C35.6673 13.4 34.8673 13.56 33.9553 13.56H31.9553V17ZM31.9553 8.072V11.352H33.5713C34.3233 11.352 34.8673 11.208 35.2193 10.92C35.5553 10.648 35.7313 10.232 35.7313 9.704C35.7313 9.176 35.5553 8.776 35.2193 8.488C34.8673 8.216 34.3233 8.072 33.5713 8.072H31.9553ZM11.2609 40H16.0009V18.73L6.49086 21.22V25.33L11.2609 24.01V40ZM35.21 39.1C33.92 40 32.39 40.45 30.68 40.45C28.97 40.45 27.47 40 26.18 39.1C24.89 38.23 23.87 36.97 23.18 35.32C22.49 33.7 22.13 31.78 22.13 29.56C22.13 27.37 22.49 25.45 23.18 23.8C23.87 22.15 24.89 20.89 26.18 19.99C27.47 19.12 28.97 18.67 30.68 18.67C32.39 18.67 33.92 19.12 35.21 19.99C36.5 20.89 37.49 22.15 38.18 23.8C38.87 25.45 39.23 27.37 39.23 29.56C39.23 31.78 38.87 33.7 38.18 35.32C37.49 36.97 36.5 38.23 35.21 39.1ZM27.95 34.48C28.61 35.65 29.51 36.25 30.68 36.25C31.85 36.25 32.75 35.65 33.41 34.48C34.07 33.31 34.4 31.69 34.4 29.56C34.4 27.43 34.07 25.78 33.41 24.61C32.75 23.44 31.85 22.87 30.68 22.87C29.51 22.87 28.61 23.44 27.95 24.61C27.29 25.78 26.96 27.43 26.96 29.56C26.96 31.69 27.29 33.31 27.95 34.48Z" 
            fill="#E50911"
          />
        </svg>
    )
}

export default TopTen