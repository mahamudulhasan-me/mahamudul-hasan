import AboutActiveLink from "@/components/ActiveLink/AboutActiveLink";
import AboutCodeSnippet from "@/components/SyntaxHighlighter/AboutCodeSnippet";
import { HiTerminal } from "react-icons/hi";
import { RiGamepadFill, RiInformationFill } from "react-icons/ri";
const AboutLayout = ({ children }) => {
  return (
    <section className="flex h-[calc(100vh-100px)]   mt-[3.5rem]">
      <div className="w-[58%]  border-r border-p4 h-full flex">
        <div className="w-[5.3%] border-r border-p4 h-full pt-5  text-2xl flex flex-col  gap-5 items-center text-s1 ">
          <AboutActiveLink href="/about/professional-info">
            <HiTerminal />
          </AboutActiveLink>
          <AboutActiveLink href="/about/personal-info">
            <RiInformationFill />
          </AboutActiveLink>
          <AboutActiveLink href="/about">
            <RiGamepadFill />
          </AboutActiveLink>
        </div>
        <div className="w-[94.7%] h-full">{children}</div>
      </div>

      <div className="w-[42%] h-full">
        <div className={`border-b border-p4 w-full h-10`}></div>
        <div className="w-full h-full md:pr-6 md:px-0 px-2 ">
          <div className="w-full h-full   md:px-5 mb-10 py-3 md:border-r border-p4">
            <span className="text-s1 md:text-2xl text-xl">
              {`// Code snippet showcase:`}
            </span>
            <div className="mt-10 mb-5 space-y-8">
              <AboutCodeSnippet>
                {`function initializeModelChunk(chunk) {
  const value = parseModel(chunk._response, chunk._value);
  const initializedChunk = chunk;
  initializedChunk._status = INITIALIZED;
  initializedChunk._value = value;
  return value;
}`}
              </AboutCodeSnippet>
              <AboutCodeSnippet>
                {`function initializeModelChunk(chunk) {
  const value = parseModel(chunk._response, chunk._value);
  const initializedChunk = chunk;
  initializedChunk._status = INITIALIZED;
  initializedChunk._value = value;
  return value;
}`}
              </AboutCodeSnippet>
              {/* <AboutCodeSnippet>
                {`export function parseModelTuple(
  response: Response,
  value: {+[key: string]: JSONValue} | $ReadOnlyArray<JSONValue>,
): any {
  const tuple: [mixed, mixed, mixed, mixed] = (value: any);`}
              </AboutCodeSnippet> */}
              {/* <AboutCodeSnippet>
                {`export function parseModelTuple(
  response: Response,
  value: {+[key: string]: JSONValue} | $ReadOnlyArray<JSONValue>,
): any {
  const tuple: [mixed, mixed, mixed, mixed] = (value: any);`}
              </AboutCodeSnippet> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutLayout;
