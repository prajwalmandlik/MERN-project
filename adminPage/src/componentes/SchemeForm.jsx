import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { Context, server } from "../main";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SchemeForm = ({ id }) => {
  const { schemeData, setSchemeData } = useContext(Context);
const navigate = useNavigate();


  let name, value;
  const updateData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setSchemeData({ ...schemeData, [name]: value });
  };

  const updateEditorData = (data, ref) => {
    setSchemeData({ ...schemeData, [ref]: data });
  };

  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
    ],
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (id === "0") {
      const { data } = await axios.post(
        `${server}/scheme/new`,
        {
          ...schemeData,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      navigate(`/`);
      }else{
        const { data } = await axios.put(
          `${server}/scheme/${id}`,
          {
            ...schemeData,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
  
        toast.success(data.message);
        navigate(`/`);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="scheme-section">
      <Container>
        <form onSubmit={handleSubmit}>
          <Stack spacing={"1rem"} py={10}>
            <FormControl>
              <FormLabel htmlFor="flare">Flare</FormLabel>
              <Input
                type="link"
                name="flare"
                id="flare"
                value={schemeData.flare}
                onChange={updateData}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="img">Logo</FormLabel>
              <Input
                type="link"
                name="img"
                id="img"
                value={schemeData.img}
                onChange={updateData}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="title">Title</FormLabel>
              <Input
                type="text"
                name="title"
                id="title"
                value={schemeData.title}
                onChange={updateData}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="description">Description</FormLabel>
              <Textarea
                name="description"
                id="description"
                value={schemeData.description}
                onChange={updateData}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="department">Department</FormLabel>
              <Input
                type="text"
                name="department"
                id="department"
                value={schemeData.department}
                onChange={updateData}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="category">Category</FormLabel>
              <Input
                type="text"
                name="category"
                id="category"
                value={schemeData.category}
                onChange={updateData}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="link">Link</FormLabel>
              <Input
                type="text"
                name="link"
                id="link"
                value={schemeData.link}
                onChange={updateData}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="eligibility">Eligibility</FormLabel>
              <ReactQuill
                theme="snow"
                value={schemeData.eligibility}
                onChange={(value) => updateEditorData(value, "eligibility")}
                className={"text-editor"}
                modules={modules}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="benefits">Benefits</FormLabel>
              <ReactQuill
                theme="snow"
                value={schemeData.benefits}
                onChange={(value) => updateEditorData(value, "benefits")}
                className={"text-editor"}
                modules={modules}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="requiredDocuments">
                Required Documents
              </FormLabel>
              <ReactQuill
                theme="snow"
                value={schemeData.requiredDocuments}
                onChange={(value) =>
                  updateEditorData(value, "requiredDocuments")
                }
                className={"text-editor"}
                modules={modules}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="steps">steps</FormLabel>
              <ReactQuill
                theme="snow"
                value={schemeData.steps}
                onChange={(value) => updateEditorData(value, "steps")}
                className={"text-editor"}
                modules={modules}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="note">Note</FormLabel>
              <Input
                type="note"
                name="note"
                id="note"
                value={schemeData.note}
                onChange={updateData}
                required
              />
            </FormControl>
            <Button
              marginY={5}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
              type={"submit"}
            >
              Submit
            </Button>
          </Stack>
        </form>
      </Container>
      <Toaster />
    </div>
  );
};

export default SchemeForm;
