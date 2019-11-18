import React from "react"
import Layout from "../components/layout"
import RecentPosts from "../components/recent-posts"
import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
    <RecentPosts posts={data.allMarkdownRemark.edges} />
    <svg
      className="footer"
      viewBox="0 0 209.98 35.809"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="grass"
        d="M50.317 11.36c-.134.004-.266.732-.395 2.406a123.092 123.092 0 00-.338 6.793c-.135-1.735-.274-3.078-.414-3.693-.28-3.427-.578-4.92-.86-2.201-.22-1.39-.443-1.202-.655 1.557a126.206 126.206 0 00-.274 4.728c-.027.243-.054.537-.08.858-.407-7.69-.902-13.276-1.348-7.476-.025.332-.045.653-.068.979-.288-3.137-.593-4.068-.876-.374a128.358 128.358 0 00-.23 3.692 140.09 140.09 0 00-.16-2.158c-.305-3.645-.63-4.942-.933-1.005-.082 1.07-.146 2.1-.199 3.104-.293-3.51-.606-4.823-.898-1.44-.254-3.256-.523-5.018-.783-3.508-.255-2.214-.518-2.516-.766.71-.07.919-.126 1.805-.175 2.675-.224-2.786-.46-4.364-.69-3.523-.218-1.33-.438-1.119-.647 1.605-.059.767-.107 1.51-.15 2.244-.244-3.124-.5-4.889-.75-3.705-.245-2.232-.497-2.716-.737-.08-.085.353-.17 1.03-.253 2.108-.147 1.918-.244 3.729-.3 5.44-.379-6.338-.815-10.23-1.212-5.063-.066.86-.119 1.692-.166 2.51-.135-.018-.27.705-.4 2.404a123.331 123.331 0 00-.331 6.523c-.436-9.645-1.033-18.672-1.56-11.815-.061.805-.111 1.584-.156 2.353-.318-4.053-.66-5.725-.977-1.597-.053.689-.098 1.36-.139 2.022-.19-1.038-.381-.85-.565 1.17-.316-4.147-.658-5.976-.976-2.115-.315-3.954-.653-5.537-.966-1.455-.096 1.243-.17 2.442-.226 3.598-.35-5.198-.74-7.87-1.097-3.22a126.994 126.994 0 00-.25 4.172c-.363-5.708-.774-8.902-1.149-4.02-.035.452-.064.892-.093 1.333-.198-.944-.397-.558-.587 1.917l-.012.177c-.267-4.075-.559-6.726-.842-5.795-.28-2.884-.573-3.621-.847-.052a125.83 125.83 0 00-.295 5.252c-.278-2.81-.568-3.492-.839.04l-.019.264c-.348-5.276-.736-8.074-1.094-3.711-.258-2.3-.526-2.659-.777.612a127.935 127.935 0 00-.234 3.803c-.334-5.124-.707-8.01-1.054-4.471-.244-2.247-.497-2.748-.737-.126-.209-1.16-.42-.877-.62 1.739-.017.218-.03.427-.046.642-.15-.487-.3-.13-.447 1.35-.168-2.281-.344-3.968-.52-4.44-.23-1.625-.466-1.585-.688 1.314-.03.38-.054.747-.079 1.117-.148-.358-.297.14-.44 1.738-.247-2.337-.504-2.912-.747-.292a18.44 18.44 0 00-.22-1.607c-.235-2.123-.478-2.627-.71-.269l-.023.098c-.262-2.482-.534-3.002-.79.18-.07.39-.138.997-.205 1.87-.017.22-.03.432-.045.65-.312-4.582-.654-7.13-.976-4.3-.224-1.53-.451-1.464-.667 1.246-.132.022-.263.751-.39 2.404a121.805 121.805 0 00-.348 7.398c-.318-6.034-.69-10.808-1.05-9.864-.042-.105-.084-.148-.126-.114-.233-1.989-.472-2.34-.7.103-.266-2.487-.542-2.971-.8.398-.017.216-.03.423-.045.637-.264-2.999-.544-4.185-.809-1.666-.273-2.057-.555-2.324-.82.692-.074.848-.133 1.667-.185 2.472-.13-.046-.257.607-.382 2.099-.3-4.772-.631-7.876-.95-6.142-.198-.954-.398-.574-.589 1.908-.061.799-.111 1.573-.156 2.336l-.04-.379c-.25-2.072-.507-2.272-.749.878-.144 1.87-.24 3.64-.297 5.314-.21-3.532-.437-6.34-.667-7.226-.303-3.578-.626-4.829-.926-.923-.093 1.21-.166 2.377-.221 3.505-.488-3.649-1.007-4.95-1.49-1.01C.126 24.96.114 28.977.023 32.765l-.023.78.009 2.13 209.97.019-.034-2.59c-.411-10.159-1.018-20.469-1.608-14.163-.148-.165-.657.72-.8 2.573-.09 1.166-.16 2.29-.214 3.38-.353-5.312-.748-8.082-1.109-3.38-.21 2.751-.318 5.28-.35 7.609-.351-7.672-.802-14.802-1.237-13.665-.166-.414-.332.199-.492 2.277-.127 1.658-.214 3.23-.273 4.734-.376-6.231-.807-10.004-1.2-4.885l-.014.202c-.337-4.692-.705-6.93-1.045-2.508l-.033.478c-.205-1.258-.413-1.109-.611 1.192-.308-3.738-.638-5.122-.943-1.141-.05.64-.093 1.266-.131 1.882-.293-3.254-.602-4.272-.89-.521-.123 1.604-.209 3.129-.268 4.589-.17-1.7-.347-2.583-.52-2.155-.213-2.31-.435-3.418-.65-2.34-.263-2.421-.536-2.862-.792.473-.015.197-.027.387-.041.582-.24-1.821-.484-1.893-.715 1.119-.024.32-.044.628-.066.942-.33-4.738-.692-7.139-1.029-3.273-.264-2.449-.538-2.908-.795.44-.21 2.73-.317 5.24-.35 7.553-.359-6.818-.787-11.992-1.19-9.122-.054-.193-.108-.289-.16-.263-.178-.765-.357-.39-.528 1.58-.26-2.41-.53-2.875-.784.306-.132.022-.263.751-.39 2.404-.047.615-.09 1.22-.127 1.813-.326-4.335-.68-6.261-1.007-2.003-.02.253-.034.496-.051.745-.252-2.815-.517-3.95-.77-1.843-.29-3.168-.595-4.122-.88-.413-.168 2.19-.269 4.235-.32 6.157-.02.207-.039.398-.058.646-.09 1.166-.159 2.29-.214 3.38-.353-5.312-.748-8.082-1.109-3.38-.243 3.175-.35 6.06-.361 8.673-.037-.893-.074-1.792-.114-2.697-.439-9.994-1.059-19.867-1.603-12.78a123.04 123.04 0 00-.341 6.875c-.004.195-.005.382-.008.575-.384-6.613-.832-10.815-1.239-5.522-.024.32-.044.63-.066.944-.371-6.043-.795-9.605-1.181-4.573a123.548 123.548 0 00-.326 6.349c-.373-6.088-.798-9.7-1.186-4.648-.066.86-.12 1.692-.166 2.51-.136-.018-.27.704-.401 2.404-.047.615-.09 1.22-.127 1.814a71.229 71.229 0 00-.26-2.88c-.357-5.489-.758-8.44-1.125-3.659-.04.523-.075 1.035-.108 1.543-.027.27-.054.564-.08.914a128.62 128.62 0 00-.224 3.533c-.363-5.878-.776-9.334-1.155-4.71-.293-3.256-.602-4.275-.89-.524-.143 1.87-.24 3.638-.297 5.311-.379-6.374-.817-10.306-1.215-5.122a119.287 119.287 0 00-.361 8.84c-.243-4.572-.517-8.383-.794-9.436-.245-1.97-.497-2.12-.735.974-.025.324-.044.638-.067.957-.289-3.15-.593-4.09-.877-.39-.072.93-.129 1.827-.178 2.708-.255-2.229-.52-2.54-.768.694-.1 1.295-.175 2.54-.232 3.74-.392-7.013-.86-11.676-1.28-6.197-.357 4.657-.421 8.692-.315 12.15-.437-9.77-1.042-19.087-1.575-12.15-.05.654-.093 1.294-.132 1.923-.244-3.209-.502-5.085-.753-4.012-.21-1.195-.424-.927-.627 1.711-.147 1.919-.243 3.73-.3 5.443-.317-5.324-.676-8.93-1.018-6.875-.192-.846-.385-.41-.57 1.977-.297-3.425-.614-4.567-.908-.734-.07.907-.125 1.783-.173 2.643-.29-3.813-.602-5.694-.897-2.998-.063.186-.125.557-.187 1.115-.284-2.994-.582-3.817-.86-.193-.27 3.524-.373 6.69-.361 9.524-.437-9.708-1.037-18.878-1.566-11.98-.062.8-.112 1.575-.157 2.339-.02.264-.036.52-.054.78-.292-3.216-.6-4.206-.886-.474-.09 1.16-.158 2.278-.213 3.362a1.017 1.017 0 00-.082-.228c-.416-8.262-.939-14.7-1.406-8.615a126.946 126.946 0 00-.252 4.214c-.29-3.184-.596-4.15-.881-.434l-.015.206c-.059.39-.117.936-.175 1.684-.078 1.026-.14 2.014-.192 2.98-.359-5.535-.762-8.539-1.13-3.736-.031.398-.056.784-.082 1.173-.285-3.021-.584-3.865-.864-.228-.02.254-.034.498-.052.748-.346-5.053-.73-7.6-1.081-3.016a123.929 123.929 0 00-.32 6.086c-.37-6.116-.796-9.785-1.184-4.853-.194-.87-.39-.444-.575 1.98a125.695 125.695 0 00-.296 5.292c-.3-4.077-.622-6.176-.928-3.36-.419-8.412-.95-15.087-1.422-8.925a127.048 127.048 0 00-.25 4.181c-.161-.452-.322.076-.476 1.906-.261-2.373-.532-2.782-.786.528a128.666 128.666 0 00-.213 3.348c-.397-7.212-.871-12.134-1.299-6.561-.013.167-.022.326-.034.491-.177-.62-.355-.098-.525 2.066-.194-.872-.388-.446-.575 1.979a128.815 128.815 0 00-.22 3.487c-.352-5.254-.744-7.974-1.103-3.298-.02.254-.035.498-.052.749-.173-2.516-.354-4.432-.536-5.126-.245-1.97-.497-2.119-.735.975-.074.974-.133 1.913-.184 2.833a15.71 15.71 0 00-.145-1.005c-.253-3.31-.522-5.154-.783-3.735-.198-.955-.398-.575-.589 1.907-.015.198-.026.388-.04.583-.24-1.822-.484-1.894-.716 1.118-.006.072-.009.14-.014.211-.305-3.614-.63-4.89-.93-.967a128.847 128.847 0 00-.225 3.57c-.22-2.516-.448-3.802-.671-2.784-.215-2.038-.437-2.743-.651-1.174-.299-3.434-.616-4.583-.91-.746-.028.355-.05.699-.074 1.047-.036.313-.072.678-.108 1.132-.193-.872-.388-.446-.574 1.979-.09 1.165-.16 2.29-.215 3.38-.285-4.288-.597-6.914-.896-5.294-.26-2.318-.528-2.69-.78.59-.13 1.704-.22 3.32-.278 4.86-.383-6.555-.829-10.693-1.233-5.426-.062.804-.112 1.583-.157 2.35-.318-4.05-.66-5.721-.977-1.594-.026.333-.046.655-.069.982-.415-6.7-.9-11.003-1.34-5.67-.14 1.688-.235 3.29-.298 4.817-.128-1.536-.26-2.666-.39-3.175-.294-3.46-.606-4.71-.897-1.26-.261-2.374-.532-2.784-.786.526-.031.41-.057.808-.084 1.209-.224-1.5-.453-1.389-.67 1.41-.183-1.567-.372-2.125-.555-1.082-.312-3.88-.648-5.396-.958-1.348a132.13 132.13 0 00-.131 1.877c-.141-.799-.283-.944-.423-.15-.313-3.881-.648-5.397-.958-1.35a129.2 129.2 0 00-.167 2.528c-.168-1.345-.339-2.493-.513-3.337-.378-6.33-.814-10.212-1.21-5.049-.195 2.53-.302 4.875-.343 7.047-.203-1.04-.408-.703-.602 1.836-.012.155-.021.304-.032.457-.19-1.484-.384-1.841-.573-.45-.35-5.198-.74-7.87-1.096-3.22-.025.324-.045.637-.067.955-.147-.394-.293.034-.435 1.523-.212-1.234-.428-.984-.632 1.68-.034.433-.061.854-.09 1.276-.382-6.56-.829-10.703-1.233-5.434a129.35 129.35 0 00-.17 2.584c-.253-2.242-.514-2.601-.76.469-.313-3.883-.65-5.401-.96-1.352a126.989 126.989 0 00-.25 4.173c-.423-8.67-.967-15.762-1.45-9.465a126.177 126.177 0 00-.274 4.727c-.027.245-.054.539-.08.861-.327-4.332-.68-6.254-1.007-1.997-.257 3.335-.36 6.348-.362 9.064-.37-6.745-.809-11.503-1.214-7.598-.11-.702-.222-1-.333-.769-.192-2.127-.39-3.297-.586-2.786-.131-.326-.262-.002-.39 1.167-.098.292-.195 1.006-.29 2.245-.268 3.48-.37 6.61-.362 9.417-.361-6.808-.793-11.881-1.196-8.774-.335-4.918-.705-7.475-1.048-3.558-.246-3.974-.514-6.869-.78-6.861-.133.004-.266.732-.395 2.405a122.211 122.211 0 00-.344 7.19c-.011.128-.022.228-.033.37l-.015.203c-.059.39-.117.937-.175 1.686a120.89 120.89 0 00-.354 7.9c-.434-9.446-1.018-18.036-1.535-11.301a117.838 117.838 0 00-.361 9.694c-.01 1.332.009 2.587.045 3.779-.403-9.02-.95-17.62-1.45-13.435-.29-3.17-.595-4.126-.88-.416-.058.757-.106 1.491-.15 2.215-.35-5.209-.74-7.89-1.098-3.235-.084 1.1-.15 2.162-.203 3.194-.232-3.077-.478-4.957-.718-4.222-.223-1.462-.45-1.322-.666 1.481-.463 6.024-.438 11.016-.182 15.05l-.046-.001c-.377-9.061-.923-18.886-1.451-16.011-.126-.608-.253-.679-.378.001-.198-.956-.398-.576-.589 1.906a125.89 125.89 0 00-.288 5.083c-.38-6.463-.822-10.497-1.224-5.272-.218 2.849-.325 5.46-.353 7.856-.331-6.263-.72-11.131-1.095-9.584-.247-2.407-.503-3.09-.746-.608-.089.34-.177 1.03-.263 2.148-.325 4.24-.409 7.967-.34 11.21-.423-9.276-.992-17.831-1.503-12.113-.08.37-.158 1.031-.235 2.036l-.001.016c-.308-3.744-.638-5.134-.944-1.15-.018.232-.031.453-.048.682-.089.162-.177.692-.264 1.601-.328-4.373-.683-6.332-1.011-2.056a128.71 128.71 0 00-.204 3.195c-.304-3.612-.629-4.887-.93-.965-.047.611-.089 1.212-.126 1.802-.375-6.195-.805-9.928-1.197-4.826a124.652 124.652 0 00-.308 5.702c-.328-4.412-.685-6.405-1.015-2.111l-.015.215c-.374-6.173-.804-9.88-1.195-4.788a131.19 131.19 0 00-.111 1.6c-.31-3.768-.64-5.18-.947-1.185-.02.253-.034.495-.052.744-.293-3.28-.604-4.318-.892-.555-.163 2.12-.263 4.106-.316 5.975-.313-4.16-.651-6.07-.967-2.461-.37-5.974-.79-9.46-1.175-4.458-.056.73-.102 1.438-.144 2.137-.322-4.166-.669-5.94-.99-1.76-.044.585-.084 1.158-.12 1.723-.273-2.693-.558-3.307-.825.167-.012.155-.02.303-.032.457-.351-5.249-.743-7.965-1.101-3.292a128.655 128.655 0 00-.21 3.292c-.097.102-.194.627-.29 1.617-.351-5.842-.752-9.519-1.125-5.773-.197-1.198-.397-1.082-.59 1.015-.208-1.159-.42-.876-.62 1.74a117.149 117.149 0 00-.358 10.089c-.321-6.98-.724-13.472-1.122-13.624-.262-2.388-.533-2.806-.788.51-.119 1.55-.203 3.024-.261 4.44-.251 3.645-.324 6.9-.275 9.78-.408-7.756-.906-13.437-1.354-7.605a127.062 127.062 0 00-.25 4.177c-.424-8.672-.967-15.766-1.451-9.469-.082 1.07-.146 2.1-.199 3.105-.306-3.659-.632-4.97-.935-1.026-.098 1.28-.173 2.51-.23 3.697-.114-1.297-.231-2.27-.348-2.745-.357-5.451-.757-8.363-1.122-3.597-.017.213-.03.417-.044.627-.026.199-.052.426-.078.693-.328-4.387-.684-6.359-1.013-2.076a120.214 120.214 0 00-.361 8.456c-.405-7.611-.897-13.085-1.34-7.323-.073.957-.13 1.88-.18 2.785-.362-5.646-.77-8.772-1.142-3.919a124.672 124.672 0 00-.308 5.7c-.281-4.674-.593-7.995-.898-7.23-.23-1.598-.463-1.542-.684 1.341-.045.582-.085 1.153-.12 1.716-.293-3.923-.608-5.915-.906-3.252-.141-.329-.282.11-.418 1.533-.2-2.673-.41-4.487-.618-4.48z"
        fill="#4cf95d"
        fillRule="evenodd"
      />
      <path
        className="flower"
        d="M21.82 35.06s-.927-5.82.925-9.128c1.852-3.307.397-14.155.397-14.155s-.7-1.937.622-5.377"
        fill="none"
        stroke="#2e8e44"
        strokeWidth=".265"
      />
      <path
        className="flower"
        d="M21.188.27l1.766 2.03L24.332.325l.856 2.086L27.157.378c-.02 3.073-.414 4.361-3.393 6.024 0 0-3.4-3.298-2.576-6.132z"
        fill="#a64eee"
        fillRule="evenodd"
        stroke="#000"
        strokeWidth=".265"
      />
      <path
        className="flower"
        d="M98.786 35.72s-2.118-2.47 1.853-7.06c3.97-4.587 3.883-14.117 3.883-14.117s-.265-5.912 2.117-6.53"
        fill="none"
        stroke="#428948"
        strokeWidth=".25"
      />
      <g transform="translate(16.764 -234.151)">
        <g fill="#ff0" fillRule="evenodd" stroke="#000" strokeWidth=".484">
          <path
            className="flower"
            d="M89.34 242.519c-.903 1.429-2.012 3.692-.181 3.946 1.862.258 1.632-2.251 1.306-3.848a2.218 2.265 0 01-.385.034 2.218 2.265 0 01-.74-.132zM91.99 241.53a2.218 2.265 0 01-.866.852c.945 1.4 2.629 3.42 3.606 1.81.921-1.518-1.161-2.299-2.74-2.662z"
            strokeWidth=".12805671999999999"
          />
          <path
            className="flower"
            d="M91.175 242.352a2.218 2.265 0 01-1.011.296c.222 1.651.852 4.503 2.505 3.422 1.553-1.016-.202-2.723-1.494-3.718zM94.096 239.977c-.561.017-1.205.189-1.799.397a2.218 2.265 0 010 .013 2.218 2.265 0 01-.5 1.432c1.578.59 3.904 1.165 3.795-.638-.056-.94-.689-1.229-1.496-1.204zM93.406 235.854c-.98-.053-1.748 1.371-2.22 2.573a2.218 2.265 0 01.888.975c1.504-.761 3.486-2.077 2.09-3.216-.264-.217-.518-.32-.758-.332z"
            strokeWidth=".12805671999999999"
          />
          <path
            className="flower"
            d="M94.3 237.942c-.727-.002-1.611.602-2.345 1.239a2.218 2.265 0 01.343 1.206 2.218 2.265 0 01-.021.287c1.663-.05 3.802-.406 3.077-1.974-.252-.543-.625-.756-1.054-.758zM91.554 234.576c-1.318.06-1.37 2.094-1.235 3.56a2.218 2.265 0 011.093.444c1.04-1.331 2.413-3.52.597-3.955a1.64 1.64 0 00-.455-.049zM87.376 235.296c-.278-.027-.57.083-.874.381-1.24 1.222.493 2.466 1.92 3.21a2.218 2.265 0 011.088-.687c-.45-1.218-1.21-2.815-2.134-2.904z"
            strokeWidth=".12805671999999999"
          />
          <path
            className="flower"
            d="M89.474 234.317a1.814 1.814 0 00-.237.029c-1.814.337-.873 2.563-.067 3.98a2.218 2.265 0 01.91-.203 2.218 2.265 0 01.236.014c.384-1.566.703-3.901-.842-3.82zM85.725 237.23c-.413.01-.75.239-.936.804-.537 1.63 1.506 1.959 3.105 1.977a2.218 2.265 0 01.608-1.214c-.833-.748-1.954-1.588-2.777-1.567zM88.032 241.254c-1.689.025-4.13.332-3.358 1.99.816 1.75 2.883.063 4.03-1.083a2.218 2.265 0 01-.672-.907z"
            strokeWidth=".12805671999999999"
          />
          <path
            className="flower"
            d="M85.495 239.438c-.698.022-1.196.33-1.168 1.18.058 1.775 2.228 1.291 3.748.733a2.218 2.265 0 01-.213-.964 2.218 2.265 0 01.037-.4c-.78-.3-1.695-.572-2.404-.55zM88.68 242.142c-1.528.684-4.016 2.07-2.532 3.34 1.556 1.33 2.793-1.44 3.318-2.92a2.218 2.265 0 01-.786-.42z"
            strokeWidth=".12805671999999999"
          />
        </g>
        <ellipse
          className="flower"
          cx="90.081"
          cy="240.38"
          rx="2.218"
          ry="2.265"
          fill="#724d01"
        />
      </g>
    </svg>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            subtitle
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
