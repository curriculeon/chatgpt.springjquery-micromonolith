package com.github.curriculeon;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/person")
public class PersonController {

    @Autowired
    private PersonRepository personRepository;

    @PostMapping("/create")
    public void createPerson(@RequestBody Person person) {
        personRepository.save(person);
        System.out.println("New person created: " + person.getId() + " " + person.getFirstName() + " " + person.getLastName());
    }

    @GetMapping("/read/{id}")
    public Person getPersonById(@PathVariable("id") long id) {
        return personRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Person not found with id " + id));
    }

    @GetMapping("/readAll")
    public Iterable<Person> getAllPeople() {
        return personRepository.findAll();
    }

    @PutMapping("/update/{id}")
    public void updatePersonById(@PathVariable("id") long id, @RequestBody Person updatedPerson) {
        Person person = personRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Person not found with id " + id));
        person.setFirstName(updatedPerson.getFirstName());
        person.setLastName(updatedPerson.getLastName());
        personRepository.save(person);
        System.out.println("Person with id " + id + " updated.");
    }

    @DeleteMapping("/delete/{id}")
    public void deletePersonById(@PathVariable("id") long id) {
        Person person = personRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Person not found with id " + id));
        personRepository.delete(person);
        System.out.println("Person with id " + id + " deleted.");
    }

}
