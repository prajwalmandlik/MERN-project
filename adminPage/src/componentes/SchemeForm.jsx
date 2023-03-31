import { AddIcon } from "@chakra-ui/icons";
import { Button, Container, FormControl, FormLabel, Input, Stack, StackDivider, Text, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";

const SchemeForm = () => {

const [taskList, setTaskList] = useState([]);
const [task, setTask] = useState('');

const AddTask = (e) => {
    setTaskList(oldTask => {
      setTask('');
      return [...oldTask,task]
    })
    console.log(taskList)
}



  return (
    <>
      <Container>
        <form>
          <Stack spacing={"1rem"} paddingTop={5}>
          <FormControl>
            <FormLabel htmlFor="flare">Flare</FormLabel>
            <Input type="link" name="flare" id="flare" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="img">Logo</FormLabel>
            <Input type="link" name="img" id="img" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="title">Title</FormLabel>
            <Input type="text" name="title" id="title" />
          </FormControl>
          <FormControl >
            <FormLabel htmlFor="description">Description</FormLabel>
            <Textarea  name="description" id="description" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="department">Department</FormLabel>
            <Input type="text" name="department" id="department" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="category">Category</FormLabel>
            <Input type="text" name="category" id="category" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="eligibility">Eligibility</FormLabel>
            <Input type="text" name="eligibility" id="eligibility" value={task}  onChange={e => setTask(e.target.value)}/>
            <Button onClick={AddTask}  ><AddIcon/></Button>
          </FormControl>
          {taskList.map((e, index) => {
              return (
                <Text>
                  <strong>Step {index + 1}: </strong>
                  <spam>{e}</spam>
                </Text>
              );
            })}
          <FormControl>
            <FormLabel htmlFor="benefits">Benefits</FormLabel>
            <Input type="text" name="benefits" id="benefits" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="requiredDocuments">Required Documents</FormLabel>
            <Input type="text" name="requiredDocuments" id="requiredDocuments" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="steps">steps</FormLabel>
            <Input type="text" name="steps" id="steps" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="link">Title</FormLabel>
            <Input type="link" name="link" id="link" />
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
    </>
  );
};

export default SchemeForm;
