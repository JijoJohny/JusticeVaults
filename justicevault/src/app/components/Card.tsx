/**
 * v0 by Vercel.
 * @see https://v0.dev/t/5Kyu0HzbpzT
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Cardf() {
    return (
      
        <div className="flex flex-col items-stretch bg-white border border-purple-500 rounded-lg">
          <img alt="Image" className="aspect-[2/1]" height="150" src="/placeholder.svg" width="300" />
          <div className="p-4 flex-1">
            <h3 className="text-lg font-semibold">Ergonomic Concrete Bacon</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Recontextualize B2C e-commerce</p>
          </div>
          <div className="p-4 flex flex-col gap-2">
            <div className="flex justify-end">
              <DownloadIcon className="h-6 w-6 text-purple-500" />
              <EyeIcon className="h-6 w-6 text-purple-500" />
            </div>
          </div>
        </div>
      
        
      
    )
  }
  
  function DownloadIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" x2="12" y1="15" y2="3" />
      </svg>
    )
  }
  
  
  function EyeIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  }
  