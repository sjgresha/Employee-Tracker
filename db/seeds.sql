INSERT INTO department (name)
VALUES ("Frontend"),
("Kitchen"),
("Maintenance")



INSERT INTO role (title, hourly, department_id)
VALUES ("Cashier", 15, 1),
("Bartender", 15, 1),
("Cashier Lead", 20, 1),
("Cook", 15, 2),
("Prep Cook", 18, 2),
("Driver", 15, 2),
("Dishwasher", 15, 3),
("Janitor", 15, 3)

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Billy", "Bob", 1, null),
("Jason", "Born", 1, null)
("Barbie", "Ken", 2, null),
("Garry", "Snail", 3, 1),
("Grim", "Reaper", 1, null),
("Uncle", "Sam", 4, null),
("Sakura", "Uchiha", 5, null),
("Padme", "Skywalker", 4, null),
("Ryan", "Renolds", 7, null),
("Mister", "Beast", 8, null),